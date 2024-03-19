const carRepo = require("../../repository/cars/index.js");

exports.getCars = (capacity, dateTime) => {
  const data = carRepo.getCars(capacity, dateTime);
  return data;
};

exports.getCar = (id) => {
  const data = carRepo.getCar(id);
  return data;
};

exports.postCar = (payload) => {
  const data = carRepo.postCar(payload);
  return data;
};

exports.putCar = (id, payload) => {
  const data = carRepo.putCar(id, payload);
  return data;
};

exports.deleteCar = (id) => {
  const data = carRepo.deleteCar(id);
  return data;
};
