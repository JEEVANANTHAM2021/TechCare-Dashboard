import React from "react";
import { FiDownload } from "react-icons/fi";

//FiDownload for download icons in lab results
const LabResult = ({ results = [] }) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-md w-full">
      <h2 className="text-[18px] font-extrabold mb-4">Lab Results</h2>

      <div className="overflow-y-auto max-h-40 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
        {results.length === 0 ? (
          <p className="text-center text-gray-400 italic text-sm py-4">
            No lab test reports available</p>) : (results.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 px-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <span className="text-sm">{item}</span>
              <FiDownload className="text-gray-500 hover:text-gray-700" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LabResult;
