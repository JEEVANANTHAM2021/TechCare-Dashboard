import React from "react";
import PatientItems from "@/components/dash/PatientItems";
import { DUMMY_PATIENT } from "@/data/data";

const PatientList = ({ onPatientSelect, activePatientId }) => {
  const patients = DUMMY_PATIENT;


  return (
    <div className="bg-white p-2 rounded-xl shadow-sm flex flex-col min-h-screen pl-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-100 p-3">
        <h3 className="text-2xl font-extrabold text-primary-blue">Patients</h3>

        <svg className="w-5 h-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* List */}
      <div className="flex-1 pl-1 overflow-y-auto ">
        {patients.map((patient) => (
          <PatientItems key={patient.id} item={patient} onSelect={onPatientSelect} isSelected={patient.id === activePatientId} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
