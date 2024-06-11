// src/components/VehicleList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const VehicleList = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <div className="flex flex-wrap -mx-4">
    {vehicles.map((vehicle) => (
      <div key={vehicle?._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <a href="car-details.html">
            <img
              src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6"
              alt={vehicle.title}
              className="w-full h-48 object-cover"
            />
          </a>
          <div className="p-4">
            <a href="car-details.html">
              <h4 className="text-lg font-semibold mb-2">{vehicle.title}</h4>
            </a>
            <h6 className="text-sm text-gray-600 mb-2">{vehicle.make}</h6>
            <p className="text-gray-600 mb-4">
              {`${vehicle.owner} / ${vehicle.model} / ${vehicle.fuel} / ${vehicle.year} / ${vehicle.color}`}
            </p>
            {/* Uncomment and style if needed
            <small>
              <strong title="fuel">
                <i className="fa fa-dashboard"></i> {vehicle.fuel}km
              </strong>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <strong title="Engine">
                <i className="fa fa-cube"></i> {vehicle.engineNo}
              </strong>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <strong title="Transmission">
                <i className="fa fa-cog"></i> Manual
              </strong>
            </small> */}
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default VehicleList;
