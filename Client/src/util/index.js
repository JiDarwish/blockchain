export function getArrayData(data) {
  return data.splice(data.length - 40, data.length - 1).map(measurment => {
    return {
      temperature: measurment.args.temperature.c[0] - 20,
      timestamp: measurment.args.timestamp.c[0],
      pressure: measurment.args.pressure.c[0],
      humidity: measurment.args.humidity.c[0]
    }
  })
}

// export function addStationsData(stations, trains) {
//   for (let i = 0; i < trains.length; i++) {
//     trains[i].pressure = stations[i].pressure;
//     trains[i].humidity = stations[i].;
//     trains[i].pressure = stations[i].pressure;
//   }
// }

export function getLastDataForCompanies(A, B, C, data) {
  let dataA;
  let dataB;
  let dataC;


  for (let i = data.length - 1; i <= data.length; i--) {
    switch (data[i].args.carrierAddress) {
      case A:
        dataA = data[i].args;
        break;
      case B:
        dataB = data[i].args;
        break;
      case C:
        dataC = data[i].args;
        break;
    }
    if (dataA && dataB && dataC) {
      break;
    }
  }

  return {
    temperatures: {
      A: dataA.temperature.c[0] - 36,
      B: dataB.temperature.c[0] - 36,
      C: dataC.temperature.c[0] - 36
    },
    pressures: {
      A: dataA.pressure.c[0],
      B: dataB.pressure.c[0],
      C: dataC.pressure.c[0]
    },
    humidities: {
      A: dataA.humidity.c[0],
      B: dataB.humidity.c[0],
      C: dataC.humidity.c[0],
    }
  }
}
export function getLast5Data(data) {
  return data.splice(data.length - 5, data.length - 1)
}