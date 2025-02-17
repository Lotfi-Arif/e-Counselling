import React from "react";

// components

import AdminNavbar from "src/components/Navbar/AdminNavbar";
import Sidebar from "src/components/Sidebar/UserSidebar";
import HeaderStats from "src/components/Headers";

const StudentLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}

export default StudentLayout;
