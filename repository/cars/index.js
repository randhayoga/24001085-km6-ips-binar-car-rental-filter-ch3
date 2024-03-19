const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.getCars = (capacity, date, time) => {
  let data = [...cars];

  // HTML forms separates the date and time while cars.json combines them into a single key and value
  const dateTime = new Date(date.concat("T", time));

  data = data.filter((car) => {
    let filteredStatus = true;

    if (capacity) {
      filteredStatus = filteredStatus && car.capacity >= capacity;
    }
    if (dateTime) {
      const availableDateTime = new Date(car.availableAt);

      filteredStatus =
        filteredStatus && availableDateTime.getTime() >= dateTime.getTime();
    }

    return filteredStatus;
  });

  return data;
};

exports.getCar = (id) => {
  let data = [...cars];

  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return null;
  } else {
    return data[0];
  }
};

exports.postCar = (payload) => {
  const lastCar = cars[cars.length - 1];

  payload = {
    id: uuidv4(),
    ...payload,
  };
  cars.push(payload);

  return payload;
};

exports.putCar = (id, payload) => {
  payload = {
    id: id,
    ...payload,
  };

  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = payload;
    }
  });

  return payload;
};

exports.deleteCar = (id) => {
  index = cars.findIndex((car) => car.id == id);
  cars.slice(index, 1);

  return null;
};
