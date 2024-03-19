const { response } = require("express");
const carUseCase = require("../usecase/cars/index.js");

exports.getCars = (req, res) => {
  const { capacity, date, time } = req.query;
  const data = carUseCase.getCars(capacity, date, time);

  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.getCar = (req, res, next) => {
  const { id } = req.params;
  const data = carUseCase.getCar(id);

  if (!data) {
    return next({
      statusCode: 404,
      message: `Car with id ${id} is not found`,
    });
  }

  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.postCar = (req, res, next) => {
  // Input validation
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate == "") {
    return next({
      statusCode: 400,
      message: "Car's plate can not be empty!",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 400,
      message: "Car's manufacture can not be empty!",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 400,
      message: "Car's model can not be empty!",
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 400,
      message: "Car's image can not be empty!",
    });
  }
  if (!rentPerDay || rentPerDay == "" || parseInt(rentPerDay) < 0) {
    return next({
      statusCode: 400,
      message: "Car's rent per day can not be empty and must be valid!",
    });
  }
  if (!capacity || capacity == "" || parseInt(capacity) <= 0) {
    return next({
      statusCode: 400,
      message: "Car's capacity can not be empty and must be valid!",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 400,
      message: "Car's description can not be empty!",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 400,
      message: "Car's available at can not be empty!",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 400,
      message: "Car's transmission at can not be empty!",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 400,
      message: "Car's availability can not be empty!",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 400,
      message: "Car's type can not be empty!",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 400,
      message: "Car's year can not be empty!",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 400,
      message: "Car's options can not be empty!",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 400,
      message: "Car's specs can not be empty!",
    });
  }

  const data = carUseCase.postCar(req.body);

  res.status(201).json(response);
};

exports.putCar = (req, res, next) => {
  // Input validation
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate == "") {
    return next({
      statusCode: 400,
      message: "Car's plate can not be empty!",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 400,
      message: "Car's manufacture can not be empty!",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 400,
      message: "Car's model can not be empty!",
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 400,
      message: "Car's image can not be empty!",
    });
  }
  if (!rentPerDay || rentPerDay == "" || parseInt(rentPerDay) < 0) {
    return next({
      statusCode: 400,
      message: "Car's rent per day can not be empty and must be valid!",
    });
  }
  if (!capacity || capacity == "" || parseInt(capacity) <= 0) {
    return next({
      statusCode: 400,
      message: "Car's capacity can not be empty and must be valid!",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 400,
      message: "Car's description can not be empty!",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 400,
      message: "Car's available at can not be empty!",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 400,
      message: "Car's transmission at can not be empty!",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 400,
      message: "Car's availability can not be empty!",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 400,
      message: "Car's type can not be empty!",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 400,
      message: "Car's year can not be empty!",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 400,
      message: "Car's options can not be empty!",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 400,
      message: "Car's specs can not be empty!",
    });
  }

  const id = req?.params?.id;
  const updatedCar = {
    id: id,
    ...req.body,
  };

  const data = carUseCase.putCar(id, updatedCar);

  res.status(201).json(response);
};

exports.deleteCar = (req, res, next) => {
  const id = req?.params?.id;
  const data = carUseCase.deleteCar(id);

  res.status(200).json(response);
};
