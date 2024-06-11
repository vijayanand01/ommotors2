const vehicleModel = require("../models/vehicleModel");

const createVehicleController = async (req, res) => {
  try {
    const {
      regNo,
      engineNo,
      chassisNo,
      title,
      make,
      model,
      year,
      color,
      owner,
      fuel,
    } = req.body;
    if (
      !regNo ||
      !engineNo ||
      !chassisNo ||
      !title ||
      !make ||
      !fuel ||
      !model ||
      !year ||
      !color ||
      !owner
    ) {
      return res.status(404).send({
        success: false,
        message: "provide all fields",
      });
    }
    //creating new vehicle object
    const newVehicle = new vehicleModel({
      regNo,
      engineNo,
      chassisNo,
      title,
      make,
      model,
      year,
      color,
      owner,
      fuel,
    });

    // save to db
    await newVehicle.save();

    return res.status(201).send({
      success: true,
      message: "book created successfully",
      newVehicle,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in creating book api",
    });
  }
};


const getallVehicleController= async (req,res)=>{
     try {
      const vehicle = await vehicleModel.find({});
    if (!vehicle) {
      return res.status(404).send({
        success: false,
        message: "vehicles not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "all vehicles fetched successfully",
    vehicleLength: vehicle.length,
      vehicle,
    });



     } catch (error) {
      console.log(error);
      
     }
}

module.exports = { createVehicleController,getallVehicleController };
