function getUserData() {
    handels = parseInput() ;
    var url = "https://codeforces.com/api/user.info?handles=" + handels.join(";") ;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            parseFetchedData(xhr.responseText);
        } 
    }

    xhr.onerror = function() {
        var doc = document.getElementById("append_table");
        doc.innerHTML = '<div class="alert alert-danger" role="alert">Something went wrong! Check the handle(s) provided if they are correct</div>'
    }
}
function parseInput(){
    ids = document.getElementById("IDs").value ;
    return ids ;
}

function parseFetchedData(data) {
    var data = JSON.parse(data);
    if (data['status'] === "OK") {
        data = data['result'];
        innerData = "<tr><th>Image</th><th>Name</th><th>Rank</th><th>Max Rank</th><th>Rating</th><th>Max Rating</th><th>Contribution</th><th>Last Online Time</th><th>Joining Date</th><th>Organisation</th><th>Place</th></tr>"
        for (let i = 0; i < data.length; i++) {
            let name = data[i]["firstName"] + " " + data[i]["lastName"];
            let place = data[i]["city"] + ", " + data[i]["country"];
            let lastseen = new Date(Date.now() - parseInt(data[i]["lastOnlineTimeSeconds"]) * 1000);
            let rating = data[i]["rating"];
            let imgsrc = data[i]["titlePhoto"];
            let contribution = data[i]["contribution"]
            let rank = data[i]["rank"];
            let organization = data[i]["organization"];
            let maxRating = data[i]["maxRating"];
            let joiningDate = new Date(Date.now() - parseInt(data[i]["registrationTimeSeconds"]) * 1000);
            let maxRank = data[i]["maxRank"];
            innerData += '<tr><th><img src="' + imgsrc + '" class="img-thumbnail" /></th><th>' + name + '</th><th>' + rank + '</th><th>' + maxRank + '</th><th>' + rating + '</th><th>' + maxRating + '</th><th>' + contribution + '</th><th>' + lastseen + '</th><th>' + joiningDate + '</th><th>' + organization + '</th><th>' + place + '</th></tr>'
        }
        var doc = document.getElementById("append_table");
        doc.innerHTML = '<table class="table table-borderless table-striped">' + innerData + '</table>'
    } else {
        var doc = document.getElementById("append_table");
        doc.innerHTML = '<div class="alert alert-danger" role="alert">Something went wrong! Check the handle(s) provided if they are correct</div>'
    }
}

function renderChart(chartName) {

}