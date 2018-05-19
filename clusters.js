var map;
var locations = [];
var map_styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e7ecf0"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -70
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];
// var locations = [
//     {lat: 41.681992, lng: -85.976669},
//     {lat: 41.825226, lng: -71.418884},
//     {lat: 34.110489, lng: -117.594429},
//     {lat: 33.787914, lng: -117.853104},
//     {lat: 43.073051, lng: -89.401230},
//     {lat: 14.309243, lng: 121.031708},
//     {lat: 40.728157, lng: -74.077644},
//     {lat: 27.498928, lng: -82.574821},
//     {lat: 44.466995, lng: -73.170959},
//     {lat: 33.770050, lng: -118.193741},
//     {lat: 35.612659, lng: -77.366356},
//     {lat: 40.522964, lng: -74.411674},
//     {lat: 35.379807, lng: -90.257874},
//     {lat: 42.722702, lng: -87.784225},
//     {lat: 32.346596, lng: -106.787720},
//     {lat: 42.326515, lng: -122.875595},
//     {lat: 37.765205, lng: -122.241638},
//     {lat: 37.910076, lng: -122.065186},
//     {lat: 33.487007, lng: -117.143784},
//     {lat: 41.653934, lng: -81.450394},
//     {lat: 46.602070, lng: -120.505898},
//     {lat: 28.018349, lng: -82.764473},
//     {lat: 44.949642, lng: -93.093124},
//     {lat: 47.380932, lng: -122.234840},
//     {lat: 42.336983, lng: -83.273262},
//     {lat: 34.704929, lng: -81.210251},
//     {lat: 43.224194, lng: -86.235809},
//     {lat: 34.426388, lng: -117.300880},
//     {lat: 34.686787, lng: -118.154160},
//     {lat: 25.468721, lng: -80.477554},
//     {lat: 36.850769, lng: -76.285873},
//     {lat: 36.974117, lng: -122.030792},
//     {lat: 37.687923, lng: -122.470207},
//     {lat: 42.902615, lng: -78.744576},
//     {lat: 39.932117, lng: -105.281639},
//     {lat: 42.562786, lng: -114.460503},
//     {lat: 38.413651, lng: -82.446732},
//     {lat: 41.394966, lng: -73.454079},
//     {lat: 41.308273, lng: -72.927887},
//     {lat: 43.565468, lng: -116.560822},
//     {lat: 30.005417, lng: -91.818665},
//     {lat: 41.245708, lng: -75.881241},
//     {lat: 37.227928, lng: -77.401924},
//     {lat: 42.963795, lng: -85.670006},
//     {lat: 38.047989, lng: -84.501640},
//     {lat: 41.385826, lng: -72.904243},
//     {lat: 46.731705, lng: -116.999939},
//     {lat: 34.224400, lng: -92.019211},
//     {lat: 47.610378, lng: -122.200676},
//     {lat: 37.412762, lng: -79.14604}
// ];


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.5902, lng: -95.7129},
        zoom: 5,
        styles: map_styles,
        disableDefaultUI: true
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (locations !== undefined || locations.length != 0) {
        //console.log(locations);
        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }

}

function resetMap(){
    map.setCenter({lat: 38.5902, lng: -95.7129});
    map.setZoom(5);
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
    locations = document.getElementById("exampleFormControlTextarea1").value.split("\n");
    var temp = []
    for(var i = 0; i < locations.length; i++) {
        var obj = stringToObj(locations[i]);
        if (obj) {
            temp.push(obj);
        }
    }
    locations = temp;
    initMap();
});

// document.getElementById('title').onclick = function() {
//     map.setCenter({lat: 38.5902, lng: -95.7129});
//     map.setZoom(5);
// };
