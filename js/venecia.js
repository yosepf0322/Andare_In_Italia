function iniciaMapa() {

    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8dab9c"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#705b7e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#162034"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ],
        { name: 'Mapa Retro' }
    );

    var propiedades = {
        center: {
            lat: 45.4384793, lng: 12.3332286
        },
        zoom: 7,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'style_map']
        }
    };

    const mapa = document.getElementById("mapa")
    const map = new google.maps.Map(mapa, propiedades)
    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');

    const marker = new google.maps.Marker({
        position: {
            lat: 45.4384793, lng: 12.3332286
        },
        icon: "./img/location.png",
        map: map
    });

    marker.addListener();
}

$(document).ready(function () {
    var front = document.getElementsByClassName("front");
    var back = document.getElementsByClassName("back");

    var highest = 0;
    var absoluteSide = "";

    for (var i = 0; i < front.length; i++) {
        if (front[i].offsetHeight > back[i].offsetHeight) {
            if (front[i].offsetHeight > highest) {
                highest = front[i].offsetHeight;
                absoluteSide = ".front";
            }
        } else if (back[i].offsetHeight > highest) {
            highest = back[i].offsetHeight;
            absoluteSide = ".back";
        }
    }
    $(".front").css("height", highest);
    $(".back").css("height", highest);
    $(absoluteSide).css("position", "absolute");
});

/* var map;
var markers = [];

function iniciaMapa() {

    var coordenadas = { lat: 45.4317805, lng: 12.3457772};

    var propiedades = {
        center: coordenadas,
        zoom: 13
    };

    map = new google.maps.Map(document.getElementById('map'), propiedades);
    muestraLugares();
}

var tipo = document.getElementById('tipo');
var valor;

tipo.addEventListener('change', function () {
    valor = this.options[tipo.selectedIndex].value;
    muestraLugares();
});

function muestraLugares() {
    if (navigator) {
        navigator.getCurrentPosition(posicion => {

            var coordenadas = {
                lat: posicion.coords.latitude,
                lng: posicion.coords.longitude
            };

            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({ location: coordenadas, radius: 1000, type: [valor] }, function (results, status, pagination) {
                if (status !== 'OK') return;
                crearMarcadores(results);
            });
        });
    }
}


function crearMarcadores(places) {
    var bounds = new google.maps.LatLngBounds();
    console.log(places);
    borraMarcadores();
    for (var i = 0, place; place = places[i]; i++) {

        var marker = new google.maps.Marker({
            map: map,
            title: '<strong>' + place.name + '</strong>,' + place.vicinity,
            position: place.geometry.location
        });

        markers.push(marker);

        google.maps.event.addListener(marker, 'mouseover', function () {

            var infowindow = new google.maps.InfoWindow({
                content: this.title,
                position: this.position
            });

            infowindow.open(map);
            setTimeout(function () { infowindow.close(); }, 3000);
        });

        var li = document.createElement('li');
        li.textContent = place.name;
        placesList.appendChild(li);

        bounds.extend(place.geometry.location);
    };
    map.fitBounds(bounds);
}

function borraMarcadores() {

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    };

    while (placesList.hasChildNodes()) {
        placesList.removeChild(placesList.firstChild);
    }
} */

window.onload = function () {
    fetch('venecia.json')
        .then(function (response) {
            response.json().then(function (datos) {
                datos.forEach(item => {
                    document.getElementById('cards-venecia').innerHTML += `
                <div class="col-lg-4 col-md-6 card-container">
                <div class="card card-flip">
                    <div class="front card-block">
                        <img id="imgcard" src="${item.img}" class="card-img-top p-2">
                        <h4 class="card-title">${item.title}</h4>
                    </div>
                    <div class="back card-block">
                        <p>${item.text}</p>
                    </div>
                </div>
            </div>`;
                });
            });
        });
};
