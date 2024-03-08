import cars from "./cars.js";

// Element constants declaration
const filteredCard = document.getElementById("carCard");
const filterButton = document.getElementById("searchBtn");

// Main
filterButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Form constant declaration
  const desiredCap = document.getElementById("passengerCount").value;
  const desiredDate = document.getElementById("dateInput").value;
  const desiredTime = document.getElementById("timeInput").value;
  const arrOfFilteredCars = cars.filterCars(
    desiredCap,
    desiredDate,
    desiredTime
  );

  let filteredCardWithCars = "";

  arrOfFilteredCars.map((filteredCar) => {
    filteredCardWithCars += `<div class="col-lg-6 col-xl-4 mb-4">
        <div class="card shadow-sm p-3 bg-white h-100">
          <img src="${filteredCar.image}" class="img-fluid" style="max-height: 275px; object-fit: cover;">
          <p class="card-text fw-medium" style="margin-top: 10px; margin-bottom: 5px;">${filteredCar.manufacture} ${filteredCar.model}</p>
          <h5 class="card-title">Rp ${filteredCar.rentPerDay} / hari</h5>
          <p class="card-text">${filteredCar.description}</p>
          <span><img src="../node_modules/bootstrap-icons/icons/people.svg" style="height: 22px;">&ensp;${filteredCar.capacity} orang</span>
          <span class="mt-2"><img src="../node_modules/bootstrap-icons/icons/gear.svg"
              style="height: 22px;">&ensp;${filteredCar.transmission}</span>
          <span class="mt-2"><img src="../node_modules/bootstrap-icons/icons/calendar4.svg"
              style="height: 22px;">&ensp;Tahun ${filteredCar.year}</span>
          <div class="card-body d-flex flex-column">
            <button type="button" class="btn btn-primary mt-auto" style="color: #ffffff; width: 100%">Pilih Mobil</button>
          </div>
        </div>
      </div>`;
  });

  filteredCard.innerHTML = filteredCardWithCars;
});
