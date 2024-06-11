const express = require("express");
const { createVehicleController, getallVehicleController } = require("../controllers/vehicleController");

const router = express.Router();


// create vehicle  || post || api/v1/vehicles/create

router.post("/create",createVehicleController);

router.get("/getall",getallVehicleController);

module.exports = router;
