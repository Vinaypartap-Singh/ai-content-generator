import React from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="md:w-64 md:block hidden fixed">
        <Sidenav />
      </div>
      <div className="md:ml-64">
        <Header /> {children}
      </div>
    </div>
  );
}
