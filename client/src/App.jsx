import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehicles from "./components/Vehicles";
import VehicleForm from "./components/VehicleForm";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Router>
          <Routes>
            <Route path="/vehicle" element={<Vehicles />}></Route>
            <Route path="/vehicleform" element={<VehicleForm />}></Route>


          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;