function showMaps(pos){
    // User location map
    var usrPos = {lat: pos.coords.latitude, lng: pos.coords.longitude}
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
        center: usrPos,
        zoom: 15
    });
    new google.maps.Marker({
        position: usrPos,
        map: map,
    });
    document.getElementById("myPos").innerHTML = "lat:" + usrPos.lat + ",lng:" + usrPos.lng;

    // Antipodal map
    var antipPos = {lat: -usrPos.lat}
    antipPos.lng = usrPos.lng < 0 ? usrPos.lng + 180 : usrPos.lng - 180;
    var mapDivAntip = document.getElementById("mapAntipoda");
    var mapAntip = new google.maps.Map(mapDivAntip, {
        center: antipPos,
        zoom: 7
    });
    new google.maps.Marker({
        position: antipPos,
        map: mapAntip,
    });
    document.getElementById("antipodalPos").innerHTML = "lat:" + antipPos.lat + ",lng:" + antipPos.lng;
}

function errorPosition(positionError){
    document.getElementById("error").innerHTML = positionError.code + ":" + positionError.message;
}

function initMaps(){
    if (Modernizr.geolocation){
        navigator.geolocation.getCurrentPosition(showMaps, errorPosition);
    } else {
        document.getElementById("error").innerHTML = "Gaaeolocation not supported";
    }
}
