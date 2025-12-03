import React, { useState } from "react";
import DiagnosisHistory from "@/components/dash/DiagnosisHistory";
import DiagnosticList from "@/components/dash/DiagnosticList";
import LabResult from "@/components/dash/LabResult";
import PatientCard from "@/components/dash/PatientCard";
import PatientList from "@/components/dash/PatientList";
import { PATIENT } from "@/data/data";
import { fetchPatientOnDemand } from "@/fetch/FetchPatient";

const Layout = ({ isMobilePatientsOpen = false, onCloseMobilePatients }) => {
  // Start with default detailed PATIENT
  const [activePatient, setActivePatient] = useState(PATIENT);

  const handlePatientSelect = async (item) => {
    if (!item) return;

    // If Jessica clicked -> call API
    if (String(item.name).toLowerCase() === "jessica taylor") {
      try {
        const fetched = await fetchPatientOnDemand("Jessica Taylor");
        if (fetched) {
          const fullPatient = {
            ...fetched,
            profile_picture:
              fetched.profile_picture ||
              fetched.image ||
              PATIENT.profile_picture,
            diagnostic_list:
              fetched.diagnostic_list || PATIENT.diagnostic_list,
            lab_results: fetched.lab_results || PATIENT.lab_results,
            diagnosis_history:
              fetched.diagnosis_history || PATIENT.diagnosis_history,
          };
          setActivePatient(fullPatient);
        } else {
          setActivePatient(PATIENT);
        }
      } catch (err) {
        console.error("Error fetching patient:", err);
        setActivePatient(PATIENT); // fallback
      }
    } else {
      // For other patients
      const minimal = {
        id: item.id,
        name: item.name,
        profile_picture: item.image,
        gender: item.gender,
        age: item.age,
        diagnostic_list: [""],
        lab_results: [""],
        diagnosis_history: [""],
      };
      setActivePatient(minimal);
    }

    // Close mobile sheet after selecting a patient
    if (isMobilePatientsOpen && onCloseMobilePatients) {
      onCloseMobilePatients();
    }
  };

  return (
    <main className="bg-light-bg min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-[calc(100vh-80px)]">
        {/* LEFT – Patient list SideBar (Desktop only) */}
        <aside className="hidden lg:block lg:col-span-3 bg-light-bg border-r border-gray-200">
          <div className="space-y-4 m-6">
            <PatientList
              activePatientId={activePatient.id}
              onPatientSelect={handlePatientSelect}
            />
          </div>
        </aside>

        {/* CENTER – Diagnosis History + Diagnostic List */}
        <section className="col-span-12 lg:col-span-6 bg-light-bg">
          <div className="p-2 space-y-6">
            <DiagnosisHistory patient={activePatient} />
            <div className="p-2 space-y-6 overflow-y-auto">
              <DiagnosticList data={activePatient.diagnostic_list} />
            </div>
          </div>
        </section>

        {/* RIGHT – Patient Card + Lab Results */}
        <aside className="col-span-12 lg:col-span-3 bg-light-bg">
          <div className="space-y-4">
            <div className="p-2">
              <PatientCard patient={activePatient} />
            </div>
            <div className="p-2 overflow-y-auto">
              <LabResult results={activePatient.lab_results} />
            </div>
          </div>
        </aside>
      </div>

      {/* MOBILE PATIENT LIST SHEET */}
      {isMobilePatientsOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden">
          <div className="absolute inset-x-0 bottom-0 max-h-[80vh] bg-white rounded-t-2xl shadow-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-gray-900">
                Patients
              </h2>
              <button
                onClick={onCloseMobilePatients}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto">
              <PatientList
                activePatientId={activePatient.id}
                onPatientSelect={handlePatientSelect}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Layout;
