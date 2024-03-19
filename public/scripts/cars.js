// Importing data
import cars from "../../data/cars.min.json" assert { type: "json" };

// Functions (biar ada OOP-annya dikit)
class Car {
    getAllCars() {
        return cars;
    }

    filterCars(desiredCap, desiredDate, desiredTime) {
        // Gabungin date and time abistu di parse biar formatnya bener
        const combinedDesiredDateTime = desiredDate.concat("T", desiredTime);
        const parsedDesiredDateTime = new Date(combinedDesiredDateTime);

        const filteredCars = cars.filter((car) => {
            const availableDate = new Date(car.availableAt);
            console.log(
                "Desired:",
                combinedDesiredDateTime,
                "| Parsed:",
                parsedDesiredDateTime,
                "| Actual:",
                availableDate
            );
            return (
                car.capacity >= desiredCap &&
                availableDate.getTime() >= parsedDesiredDateTime.getTime()
            );
        });

        return filteredCars;
    }
}

export default new Car();
