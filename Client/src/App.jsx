// import React from "react";

import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("/owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/rooms" element={<Rooms />} />
          <Route path="/owner/*" element={<OwnerRoutes />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
