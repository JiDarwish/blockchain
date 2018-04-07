import { Train, Station } from "../model/components";

let time = 0;

function simulationLoop(model, state, tickDuration) {

    //Randomly modify the data
    for(let train of model.trains) {
        train.pressure += (Math.random() * 2) - 1;
        train.humidity += (Math.random() * 2) - 1;
        train.temperature += (Math.random() * 2) - 1;

        state.trainData[state.trainData.length] = {
            args: {
                pressure: train.pressure,
                humidity: train.humidity,
                temperature: train.temperature,
                timestamp: time
            }
        };
    }

    for(let station of model.stations) {
        station.temp += (Math.random() * 2) - 1;
        station.pressure += (Math.random() * 2) - 1;
        station.temp += (Math.random() * 2) - 1;
    }

    //Write a datapoint
    //TODO;

    console.log(state);

    state.stationActive[0] = 'active';
    time++;

    setTimeout(function() {
        simulationLoop(model, state, tickDuration);    
    }, tickDuration);
  };

export const startSimulation = function(model, state, tickDuration) {
    simulationLoop(model, state, tickDuration);
}