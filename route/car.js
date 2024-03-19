const express = require("express");
const router = express.Router();
const carController = require("../controller/car.js");

router.route("/").get(carController.getCars).post(carController.postCar);

router
  .route("/:id")
  .get(carController.getCar)
  .put(carController.putCar)
  .delete(carController.deleteCar);

module.exports = router;
