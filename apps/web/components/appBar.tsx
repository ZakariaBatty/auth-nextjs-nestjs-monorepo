import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="p-2 flex  gap-3 bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
      <Link href={'/'} >Home</Link>
      <Link href={'dashboard'} >Dashboard</Link>
    </div>
  );
};

export default AppBar;
