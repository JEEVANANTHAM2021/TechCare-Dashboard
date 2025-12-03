import React from "react";
import PropTypes from "prop-types";
import DotsIcon from "@/assets/icons/DotIcon.png";


const PatientItems = ({ item, onSelect, isSelected }) => {
  if (!item) return null;


  const selectedClasses = "bg-[#E0FDF4] border-l-4 border-sky-300 -ml-4 pl-4";
  const normalClasses = "hover:bg-gray-50 border-l-4 border-transparent -ml-4 pl-4";

  const imageSrc = item.image || item.profile_picture 

  return (
    <div onClick={() => onSelect && onSelect(item)} className={`flex items-center p-2 cursor-pointer transition-colors rounded-lg ${isSelected ? selectedClasses : normalClasses}`}>
      <div className="relative w-10 h-10 mr-3 flex-shrink-0">
        <img src={imageSrc} alt={item.name || "Patient"} className="w-full h-full object-cover rounded-full" />
        <span className={`absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full ring-2 ring-white ${ item.isActive ? "bg-emerald-400" : "bg-gray-300"}`}/>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold truncate">{item.name}</p>
        <p className="text-xs font-regular text-gray-500 truncate">{item.gender}, {item.age}</p>
      </div>

      <div className="w-5 h-5 text-gray-400 hover:text-sky-600 ml-2 flex-shrink-0">
        {DotsIcon ? (<img src={DotsIcon} alt="Options" className="w-full h-full object-contain"/>) : (
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        )}
      </div>
    </div>
  );
};

PatientItems.propTypes = {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool
};

export default PatientItems;
