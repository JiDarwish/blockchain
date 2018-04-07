export const Station = class {
  address = "unset";
  measurements = [];
  hasCargo = false;
}

export const Train = class {
  address = "unset";
  measurements = [];
  hasCargo = false;
  addMeasurement = function(temp, pressure, humidity, timestamp) {
    let measurement = new Measurement();
    measurement.temp = temp;
    measurement.pressure = pressure;
    measurement.humidity = humidity;
    measurement.timestamp = timestamp;
    this.measurements.push(measurement);
  }
}

export const Measurement = class {
  temp = 20;
  pressure = 20;
  humidity = 20;
  timestamp = 1;
}