// App.jsx
import React, { useState } from "react";
import Header from "@/components/header/Header";
import Layout from "@/components/dash/Layout";

const App = () => {
  const [isMobilePatientsOpen, setIsMobilePatientsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-light-bg font-manrope text-gray-900">
      <Header
        // this will be called when "Patients" is clicked in mobile nav
        onMobilePatientsClick={() => setIsMobilePatientsOpen(true)}
      />
      <Layout
        isMobilePatientsOpen={isMobilePatientsOpen}
        onCloseMobilePatients={() => setIsMobilePatientsOpen(false)}
      />
    </div>
  );
};

export default App;
