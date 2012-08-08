// Page 2 - Map Stuff

var cyrusPosition = {latitude:40.728657, longitude:-74.004722};
var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

$(document).ready(function(){
    // Load the map every time the page is done animating
    $('#directions-page').bind( 'pageAnimationEnd', function( e, i ) {
        if( i.direction != 'in' ) {
            return;
        }
        forge.geolocation.getCurrentPosition(onSuccess, onError);
    });

    $("#get-directions").tap(function () {
        calcRoute();
    });
});

function initializeMap(latitude, longitude) {
    var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        // This is something that may help if there are weird bugs on the iPhone map with dragging
        //disableDefaultUI: true
    };
    map = new google.maps.Map($("#map-canvas")[0],mapOptions);

    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
}

function addMarker(latitude, longitude){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        title: 'You are here'
    });
}

var onSuccess = function (position) {
    initializeMap(position.coords.latitude, position.coords.longitude);
    addMarker(position.coords.latitude, position.coords.longitude);
};

var onError = function (error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
};

function getDirSuccess(position){
    var request = {
        origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        destination: new google.maps.LatLng(cyrusPosition.latitude, cyrusPosition.longitude),
        travelMode: google.maps.DirectionsTravelMode.WALKING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

function calcRoute() {
    //todo: get UI loader showing and button styling
    $("#loading_overlay").show();
    forge.geolocation.getCurrentPosition(getDirSuccess, onError);
    $("#get_directions").html("Refresh Directions to Cyrus");
    $("#loading_overlay").hide();
}
