import { Train, Station } from "../model/components";

function simulationLoop(model, tickDuration) {
    for(let train of model.trains) {
        //train.temp += (Math.random() * 2) - 1;
        train.addMeasurement(20, 25, 25, 10);
    }

    console.log(model);

    setTimeout(function() {
        simulationLoop(model, tickDuration);    
    }, tickDuration);
  };

export default function(model, tickDuration) {
    simulationLoop(model, tickDuration);
}