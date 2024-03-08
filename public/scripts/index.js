import cars from "./cars.js";

const allCars = cars.getAllCars();
console.log(allCars);

const filteredCars = cars.filterCars(2, "2022-04-23", "00:00:00");
console.log(filteredCars);
