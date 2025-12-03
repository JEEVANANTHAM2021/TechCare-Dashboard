import React from "react";
import BloodPressureChart from "@/components/stat/BloodPressureChart";
import Card from "@/components/dash/Card";
import { PATIENT } from "@/data/data";

// PATIENT for fetching default details--
const DiagnosisHistory = ({ patient = PATIENT }) => {
  const history = patient?.diagnosis_history || [];
  const latest = history[0] || {
    month: "October",
    year: 2024,
    blood_pressure: {
      systolic: { value: 128, levels: "Higher than Average" },
      diastolic: { value: 84, levels: "Higher than Average" }
    },
    respiratory_rate: { value: 18, levels: "Normal" },
    temperature: { value: 98.5, levels: "Normal" },
    heart_rate: { value: 75, levels: "Normal" }
  };

  const bp = latest.blood_pressure;
  const chartData = history.length > 0 ? history : [];

  return (
    <section className="bg-white rounded-2xl p-6 shadow-md w-full space-y-4">
      <h1 className="text-[18px] font-extrabold text-[#1F2937]">Diagnosis History</h1>

      <div className="bg-[#F5F3FF] rounded-2xl p-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-semibold text-primary-blue">Blood Pressure</h2>
          <span className="text-[13px] text-secondary-gray">{latest.month} {latest.year}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="flex-1 min-w-[] h-[298px]">
            <BloodPressureChart history={chartData} />
          </div>

          <div className="w-full md:w-36 flex-shrink-0 space-y-5 pt-2">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#E879F9]" />
                <span className="text-[13px] text-secondary-gray font-bold">Systolic</span>
              </div>
              <p className="text-[22px] font-extrabold text-primary-blue leading-none">{bp.systolic.value}</p>
              <div className="flex items-center gap-1 text-[11px]">
                <span className="text-[#6B7280]">{bp.systolic.levels}</span>
              </div>
            </div>

            <hr className="border-[#E5E7EB]" />

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                <span className="text-[13px] text-secondary-gray font-bold">Diastolic</span>
              </div>
              <p className="text-[22px] font-extrabold text-primary-blue leading-none">{bp.diastolic.value}</p>
              <div className="flex items-center gap-1 text-[11px]">
                <span className="text-[#6B7280]">{bp.diastolic.levels}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vitals grid: keep using Card component */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Card title="Respiratory Rate" data={latest.respiratory_rate} />
        <Card title="Temperature" data={latest.temperature} />
        <Card title="Heart Rate" data={latest.heart_rate} />
      </div>
    </section>
  );
};

export default DiagnosisHistory;
