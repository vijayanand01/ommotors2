import React, { useState } from "react";
import axios from "axios";

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    regNo: "",
    engineNo: "",
    chassisNo: "",
    title: "",
    make: "",
    model: "",
    year: "",
    color: "",
    owner: "",
    mileage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/v1/vehicles/create`,
        formData
      );
      console.log("Vehicle data submitted:", formData);
      // Reset form after successful submission
      setFormData({
        regNo: "",
        engineNo: "",
        chassisNo: "",
        title: "",
        make: "",
        model: "",
        year: "",
        color: "",
        owner: "",
        fuel: "",
      });
    } catch (error) {
      console.error("Error submitting vehicle data:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto  p-4 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mt-20     mb-4">
        Vehicle Details Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="regNo">
              Registration Number
            </label>
            <input
              type="text"
              id="regNo"
              name="regNo"
              value={formData.regNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="engineNo"
            >
              Engine Number
            </label>
            <input
              type="text"
              id="engineNo"
              name="engineNo"
              value={formData.engineNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="chassisNo"
            >
              Chassis Number
            </label>
            <input
              type="text"
              id="chassisNo"
              name="chassisNo"
              value={formData.chassisNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="make">
              Make
            </label>
            <input
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="model">
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="year">
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="color">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="owner">
              Owner
            </label>
            <select
              id="owner"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Owner</option>
              <option value="Customer">Customer</option>
              <option value="Frc">Frc</option>
              
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="fuel"
            >
              fuel
            </label>
            <select
              id="fuel"
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Cng">Cng</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VehicleForm;
