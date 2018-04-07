export function getArrayData(data) {
  return data.map(measurment => {
    return {
      temperature: measurment.args.temperature.c[0],
      timestamp: measurment.args.timestamp.c[0],
      pressure: measurment.args.pressure.c[0],
      humidity: measurment.args.humidity.c[0]
    }
  })
}