function iniciaMapa() {

    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
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
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 1.5
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]);

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

    const marker = new google.maps.Marker({
        position: {
            lat: 45.4384793, lng: 12.3332286
        },
        icon: "./img/location.png",
        map: map
    });

    marker.addListener();

    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');
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
