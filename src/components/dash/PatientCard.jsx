import React from "react";
import PropTypes from "prop-types";
import { DUMMY_PATIENT } from "@/data/data";


const PatientCard = ({ patient }) => {
  if (!patient) return null;

  const isJessica = String(patient.name).toLowerCase() === "jessica taylor";

  return (
    <div className="bg-white p-6 rounded-2xl text-center space-y-8 shadow-md min-h-[700px]">
      {/* Profile Image */}
      <div className="flex flex-col items-center text-left">
        <img src={patient.profile_picture} alt={patient.name}  className="w-40 h-40 rounded-full object-cover mb-4"/>
        <h2 className="text-lg font-bold text-primary-blue">{patient.name}</h2>
      </div>

      {/* Patient card details */}
      {isJessica ? (
        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-3">
            <div>
             <img src="/icons/CalendarIcon.png" alt="icon" className="w-[42px] h-[42px]" />
            </div>
             <div>
              <p className="text-xs font-semibold text-secondary-gray">Date Of Birth</p>
              <p className="text-sm font-bold text-primary-blue">
                {patient.date_of_birth ? new Date(patient.date_of_birth).toLocaleDateString() : "—"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <img src="/icons/gender.png" alt="icon" className="w-[42px] h-[42px]" /></div>
              <div>
              <p className="text-xs font-semibold text-secondary-gray">Gender</p>
              <p className="text-sm font-bold text-primary-blue">{patient.gender}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <img src="/icons/PhoneIcon.png" alt="icon" className="w-[42px] h-[42px]" /></div>
              <div>
              <p className="text-xs text-start font-semibold text-secondary-gray">Contact Info</p>
              <p className="text-sm font-bold text-primary-blue">{patient.phone_number}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <img src="/icons/PhoneIcon.png" alt="icon" className="w-[42px] h-[42px]" /></div>
              <div>
              <p className="text-xs font-semibold text-secondary-gray">Emergency Contacts</p>
              <p className="text-sm text-start font-bold text-primary-blue">{patient.emergency_contact}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <img src="/icons/ShieldIcon.png" alt="icon" className="w-[42px] h-[42px]" /></div>
              <div>
              <p className="text-xs text-start font-semibold text-secondary-gray">Insurance Provider</p>
              <p className="text-sm font-bold text-primary-blue">{patient.insurance_type}</p>
            </div>
          </div>

          <button className="w-60 bg-[#00E4AA] text-white text-sm font-semibold py-2 rounded-full mt-8">
            Show All Information
          </button>
        </div>
      ) : (
        /* For Other Patients */
        <div className="mt-5 space-y-3 text-center">
          <p className="text-sm text-gray-600">{patient.gender}</p>
          <p className="text-sm text-gray-600">{patient.age} Years</p>
          <p className="text-[11px] text-gray-400 italic">No additional medical data available</p>
        </div>
      )}
    </div>
  );
};

PatientCard.propTypes = {
  patient: PropTypes.object
};

export default PatientCard;
