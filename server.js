const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");

//importing .env and configuration
require("dotenv").config();

connectDB();

const app = express();

//middlewares
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/vehicles", require("./routes/vehicleRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("<h1> vijayanand</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
