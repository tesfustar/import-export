import React from "react";
import { Footer, Navbar } from "./components";
import { About, Contact, Services, Home ,ExportService,ImportServices} from "./Pages";
import {  Routes, Route,Navigate } from "react-router-dom";
const App = () => {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Navbar />

      <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/import/:id" element={<ImportServices />} />
        <Route path="/export/:id" element={<ExportService />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
