const inputMass = [50350,104487,101866,143582,58497,69981,98300,119291,148489,83005,107291,124738,142256,108102,121054,119697,75546,109022,136754,52073,115235,87668,64523,71179,69071,142380,68233,115226,132656,137007,82838,79339,131726,52295,102941,98297,144374,118998,63910,146772,82916,72068,82855,55915,91663,82917,105876,119551,70639,114459,129235,56041,70031,145187,54913,56928,52159,144384,80104,83932,81334,72693,50595,128895,54138,79126,69930,72896,108357,67415,110581,131477,65517,87912,125782,51785,145472,54358,87715,98067,99791,92502,50750,76614,110137,56118,149501,76542,87183,128333,127657,144246,141704,96873,62434,136609,121829,111796,103936,69807]

//Part 1:
resultFuel1 = inputMass.reduce((acc, curValue) => (acc + ((curValue - curValue%3)/3 -2)),0 )

console.log(resultFuel1)

//Part2:
const fuelCalculation = (fuel) => {
	let totalFuel = (fuel - fuel%3)/3 - 2;
	if(totalFuel < 0){
		totalFuel = 0;
	}
	return totalFuel
}

let resultFuel2 = inputMass.reduce((acc, curValue) => {
	let totalCurrentFuel = fuelCalculation(curValue);
	let currentFuel = fuelCalculation(curValue);
	while (true){
		currentFuel = fuelCalculation(currentFuel);
		if (currentFuel < 0) {
			break;
		} else {
			totalCurrentFuel += currentFuel;
		}
	}
	return acc + totalCurrentFuel;

},0)

console.log(resultFuel2)
