function getUserData(handle) {

}

function parseInput(input) {

}

function parseFetchedData(data) {
    var data = JSON.parse(data);
    if (data['status'] === "OK") {
        data = data['result'];

        for (let i = 0; i < data.length; i++) {
            let name = data[i]["firstName"] + " " + data[i]["lastName"];
            let place = data[i]["city"] + ", " + data[i]["country"];
            let lastseen = parseInt(data[i]["lastOnlineTimeSeconds"]) / 60;
            let rating = data[i]["rating"];
            let imgsrc = data[i]["titlePhoto"];
            let contribution = data[i]["contribution"]
            let rank = data[i]["rank"];
            let organization = data[i]["organization"];
            let maxRating = data[i]["maxRating"];
            let joiningDate = new Date(Date.now() - parseInt(data[i]["registrationTimeSeconds"]) * 1000);
            let maxRank = data[i]["maxRank"];

        }
    } else {

    }
}

function renderChart(chartName) {

}