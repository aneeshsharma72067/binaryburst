import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="w-4/5 mx-auto max-w-6xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
