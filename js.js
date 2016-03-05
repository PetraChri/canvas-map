document.addEventListener("DOMContentLoaded", function(){
    getLocation();
});
function getLocation() {
    if(navigator.geolocation) {
        var params = {
            enableHighAccuracy: false,
            timeout: 3600,
            maximumAge: 60000
        };
        navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params);
    }
    else {
        function gpsError(error){
            var errors = {
                1: 'Permission denied'
            };
            alert("Error: " + errors[error.code]);
        }
    }
}

function reportPosition(position) {
    var height = "400";
    var width = "400";
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude +
        "&zoom=14&size=" + width + "x" + height + "&maptype=roadmap&markers=color:red%7C" + latitude + "," + longitude + "&key=" + "AIzaSyDwgmeeXC3CwrndWosNrI33wmwf0SxexJg";
    console.dir(url);
    var draw = document.createElement("canvas");
    document.querySelector("body").appendChild(draw);
    draw.height = height;
    draw.width = width;
    context = draw.getContext("2d");
    context.src = url;
    var maps = new Image();
    maps.onload = function () {
        context.drawImage(maps, 0 , 0, 400, 400);
    };
    maps.src = url;
}
