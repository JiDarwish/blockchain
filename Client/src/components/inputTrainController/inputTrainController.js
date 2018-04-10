
// This is only used to "fake" the working of the map on the left of the screen. For demo purposes. Kept for expirements

export class InputTrainController {
    app;
    constructor(app) {
        console.log("XX");
        this.app = app;

        document.onkeypress = function (e) {
            e = e || window.event;
            let station = "A";
            console.log(e);
            switch (e.key) {
                case "a":
                    station = "A"
                    break;
                case "b":
                    station = "B"
                    break;
                case "c":
                    station = "C"
                    break;
                case "q":
                    station = "AB";
                    break;
                case "g":
                    station = "BC";
                    break;
                case "d":
                    station = "CA";
                    break;
                case "0":
                    station = "none";
                    break;
                default:
                    return;
            }

            app.state.pinAState = station === "A" ? 'active' : 'inactive';
            app.state.pinBState = station === "B" ? 'active' : 'inactive';
            app.state.pinCState = station === "C" ? 'active' : 'inactive';
            app.state.trackState = station === "AB" || station === "BC" || station === "CA" ? station : 'none';
            app.setState(app.state);
        };
    }

    setStationTo = function (station) {
        this.app.state.pinAState = station === "A" ? 'active' : 'inactive';
        this.app.state.pinBState = station === "B" ? 'active' : 'inactive';
        this.app.state.pinCState = station === "C" ? 'active' : 'inactive';
        this.app.state.trackState = station === "AC" || station === "BC" || station === "CA" ? station : 'none';
        this.app.setState(this.app.state);
    }
}