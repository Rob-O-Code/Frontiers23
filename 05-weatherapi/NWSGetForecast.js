class NWSGetForecast {
    constructor () {
        this.gridId = null;
        this.gridX = null;
        this.gridY = null;
    }

    request(callback) {
        var xhttp = new XMLHttpRequest();
        let self = this;

        xhttp.onreadystatechange = function() {
            if (this.readyState != 4) return;
            if (this.status != 200) {
                alert(`Payload bad (code ${this.status})`);
                return;
            }
            self.json = JSON.parse(this.responseText);
            if (callback !== undefined) {
                callback();
            }
        }
        let URL = `https://api.weather.gov/gridpoints/${this.gridId}/${this.gridX},${this.gridY}/forecast`;
        xhttp.open("GET", URL, true);
        xhttp.send();
    }

    getCurrentCondition() {
        return this.json.properties.periods[0].shortForecast;
    }
}