var map;
var locations = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.5902, lng: -95.7129},
        zoom: 5,
        styles: map_styles,
        disableDefaultUI: true
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (locations !== undefined || locations.length != 0) {
        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                //label: labels[i % labels.length],
                icon: 'img/marker.svg'
            });
        });

        var mcOptions = {
          styles:[{
              url: "img/m1.svg",
                    width: 60,
                    height: 60,
                    fontFamily: "Roboto",
                    textSize: 18,
                    textColor: "white",
          }],
          gridSize:36,
        };
        var markerCluster = new MarkerClusterer(map, markers, mcOptions);

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'img/m'});
    }

}

function resetMap(){
    map.setCenter({lat: 38.5902, lng: -95.7129});
    map.setZoom(5);
}

function refreshLocations(data, callback) {
    var temp = []
    for(var i = 0; i < data.length; i++) {
        var obj = stringToObj(data[i]);
        if (obj) {
            temp.push(obj);
        }
    }
    locations = temp;
    callback();
}

function stringToObj(s) {
    if (s.length) {
        var l = s.split(',');
        var d = {};
        for (var i in l) {
            var a = l[i].split(':');
            d[a[0].trim()] = parseFloat(a[1].trim());
        }
    } else {
        return null;
    }
    return d;
}

document.getElementById("locationSubmitButton").addEventListener("click", function(){
    var location_data = document.getElementById("exampleFormControlTextarea1").value.split("\n");
    refreshLocations(location_data, function(){
        initMap();
    });
});

// document.getElementById('title').onclick = function() {
//     map.setCenter({lat: 38.5902, lng: -95.7129});
//     map.setZoom(5);
// };
