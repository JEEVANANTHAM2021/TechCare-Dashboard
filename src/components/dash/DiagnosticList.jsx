import React from "react";

const getStatusClasses = (rawStatus) => {
  const status = (rawStatus || "")
    .toString()
    .trim()
    .toLowerCase();

  if (!status) {
    return "bg-gray-100 text-gray-500";
  }
  if (["recovered", "resolved", "stable","cured"].includes(status)) {
    return "bg-green-100 text-green-700";
  }
  if (
    ["ongoing", "active", "under observation", "follow-up"].includes(status)
  ) {
    return "bg-yellow-100 text-yellow-700";
  }
  if (["critical", "worsening", "urgent","untreated"].includes(status)) {
    return "bg-red-100 text-red-700";
  }
  return "bg-blue-100 text-blue-700";
};

const DiagnosticList = ({ data = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md">
      {/* Header */}
      <div className="p-3 border-b border-gray-200">
        <h2 className="text-lg font-extrabold text-primary-blue">
          Diagnostic List
        </h2>
      </div>

      {/* Scrollable body (Y only) */}
      <div className="max-h-60 overflow-y-auto p-4 custom-scrollbar">
        <table className="w-full object-cover text-sm border-collapse">
          <thead className="text-gray-500 text-[13px] bg-gray-100">
            <tr>
              <th className="pb-2 text-left">Problem/Diagnosis</th>
              <th className="pb-2 text-left">Description</th>
              <th className="pb-2 text-left">Status</th>
            </tr>
          </thead>

          <tbody className="text-[14px]">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => {
                // Guard in case some entries are just "" from minimal patient
                if (!item || typeof item !== "object") return null;

                return (
                  <tr
                    key={index}
                    className="border-b last:border-none text-left hover:bg-gray-50"
                  >
                    <td className="py-3 align-top break-words">
                      {item.name}
                    </td>
                    <td className="py-3 align-top break-words">
                      {item.description}
                    </td>
                    <td className="py-3 align-top">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${getStatusClasses(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-4 text-center text-gray-400 italic"
                >
                  No diagnostic records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
