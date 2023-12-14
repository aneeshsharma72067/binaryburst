import React from "react";

function Navbar() {
  return (
    <div className="w-full pt-10 pb-6 flex items-center">
      <div className="flex-1">
        <h1 className="text-3xl font-bold ">
          Binary<span className="text-red-500">Burst</span>
        </h1>
      </div>
      <div className="mx-auto flex-1 flex items-center justify-center gap-10">
        <a href="/">Home</a>
        <a href="/">Somewhere</a>
        <a href="/">Something</a>
      </div>
    </div>
  );
}

export default Navbar;
