import React, { useState } from "react";
import DoctorProfile from "@/assets/images/Doctor-profile.png";

// Icons for Header
const icons = {
  logo: "/icons/LogoIcon.png",
  overview: "/icons/OverviewIcon.png",
  patients: "/icons/PatientsIcon.png",
  schedule: "/icons/ScheduleIcon.png",
  message: "/icons/MessageIcon.png",
  transactions: "/icons/TransactionsIcon.png",
  settings: "/icons/settings.png",
  dot: "/icons/more_vert.svg",
};

const NAV_TABS = [
  { name: "Overview", icon: icons.overview, key: "Overview" },
  { name: "Patients", icon: icons.patients, key: "Patients" },
  { name: "Schedule", icon: icons.schedule, key: "Schedule" },
  { name: "Message", icon: icons.message, key: "Message" },
  { name: "Transactions", icon: icons.transactions, key: "Transaction" },
];

const Header = ({ patientName, onMobilePatientsClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <div className="pt-3 px-3 sm:pt-4 sm:px-4 lg:pt-5 lg:px-6">
      {/* Constrain width on large / PC, full width on mobile */}
      <header
        className="
          relative bg-white shadow-custom 
          h-14 sm:h-16 lg:h-20
          flex items-center 
          rounded-2xl sm:rounded-full 
          px-4 sm:px-6 lg:px-8 
          border border-gray-100
          max-w-[1200px] mx-auto
        "
        aria-label={`Dashboard header for patient: ${patientName}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 mr-3 sm:mr-6">
          <img
            src={icons.logo}
            alt="Tech.Care Logo"
            className="h-8 w-auto sm:h-10 lg:h-11"
          />
        </div>

        {/* Navigation (Tablet & up) */}
        <nav className="hidden sm:flex flex-1 justify-center">
          <div className="flex items-center gap-1.5 md:gap-3 lg:gap-4">
            {NAV_TABS.map((tab) => (
              <a
                key={tab.key}
                href="#"
                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 rounded-full transition-colors text-xs md:text-sm font-medium ${
                  tab.name === "Patients"
                    ? "bg-active-teal text-primary-blue"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <img
                  src={tab.icon}
                  alt=""
                  className={`w-4 h-4 md:w-5 md:h-5 ${
                    tab.name !== "Patients" ? "opacity-60" : ""
                  }`}
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Hamburger (Mobile only) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden ml-auto p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Doctor Profile + Icons (Tablet, Desktop, PC) */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4 ml-3 md:ml-4">
          <div className="flex items-center gap-2.5 md:gap-3">
            <img
              src={DoctorProfile}
              alt="Dr. Jose Simmons"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="leading-tight">
              <p className="font-bold text-primary-blue text-xs md:text-sm">
                Dr. Jose Simmons
              </p>
              <p className="text-[10px] md:text-xs text-secondary-gray">
                General Practitioner
              </p>
            </div>
          </div>

          <img
            src={icons.settings}
            alt="Settings"
            className="w-5 h-5 md:w-5 md:h-5 cursor-pointer hover:opacity-80"
          />
          <img
            src={icons.dot}
            alt="More options"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 px-1">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 px-4 py-4 max-w-[1200px] mx-auto">
            {/* Doctor Profile + Settings (no dot) */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={DoctorProfile}
                  alt="Dr. Jose Simmons"
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <div className="leading-tight">
                  <p className="font-bold text-primary-blue text-sm">
                    Dr. Jose Simmons
                  </p>
                  <p className="text-xs text-secondary-gray">
                    General Practitioner
                  </p>
                </div>
              </div>

              <img
                src={icons.settings}
                alt="Settings"
                className="w-6 h-6 cursor-pointer"
              />
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-2">
              {NAV_TABS.map((tab) => (
                <a
                  key={tab.key}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (tab.name === "Patients" && onMobilePatientsClick) {
                      onMobilePatientsClick();
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm ${
                    tab.name === "Patients"
                      ? "bg-active-teal text-primary-blue"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <img src={tab.icon} alt="" className="w-5 h-5 opacity-80" />
                  <span>{tab.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
