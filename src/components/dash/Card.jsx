import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, data }) => {
  if (!data) return null;

  // Icon mapping 
  const iconMap = {
    "Respiratory Rate": "/src/assets/icons/LungIcon.png",
    "Temperature": "/src/assets/icons/TempIcon.png",
    "Heart Rate": "/src/assets/icons/HeartIcon.png",
  };

  const icon = iconMap[title] || null;

  // Display units
  const unit =
    title === "Temperature" ? "°F" : title === "Respiratory Rate" ? "bpm" : "bpm";

  // Background colors 
  const bgColor = {
    "Respiratory Rate": "bg-[#E0F2FE]",
    "Temperature": "bg-[#FEE2E2]",
    "Heart Rate": "bg-[#FFE4E6]",
  }[title] || "bg-gray-100";

  return (
    <div className={`rounded-2xl p-5 shadow-sm ${bgColor} flex flex-col`}>
      {/* Icon */}
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
        {icon && (
          <img src={icon} alt={`${title} icon`} className="w-7 h-7 object-contain" />
        )}
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-secondary-gray mb-1">{title}</p>

      {/* Value */}
      <p className="text-2xl font-extrabold text-primary-blue leading-none">
        {data.value} <span className="text-sm font-medium">{unit}</span>
      </p>

      {/* Status */}
      <p className="text-xs font-regular text-gray-500 mt-1">{data.levels}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    levels: PropTypes.string,
  }).isRequired,
};

export default Card;
