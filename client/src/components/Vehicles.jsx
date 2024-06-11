import React, { useEffect, useState } from "react";
import axios from "axios";
import VehicleList from "./VehicleList";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND}/api/v1/vehicles/getall`);
        setVehicles(response.data.vehicle);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
      }
    };

    fetchVehicles();
  }, []);
  return <>
  <VehicleList  vehicles={vehicles}/>
  </>;
};

export default Vehicles;
