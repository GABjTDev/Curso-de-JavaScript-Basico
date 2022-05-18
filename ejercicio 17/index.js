// - Crea un mapa en HTML
// - Pon chinchetas en tus 3 lugares favoritos del planeta tierra

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const position1 = { lat: -34.613032, lng: -58.419359 };
  const position2 = { lat: -34.617993, lng: -58.432559 };
  const position3 = { lat: -34.636405, lng: -58.431961 };

  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: position1,
  });

  // The marker, positioned at Uluru
  new google.maps.Marker({
    position: position1,
    map: map,
  });

  new google.maps.Marker({
    position: position2,
    map: map,
  });

  new google.maps.Marker({
    position: position3,
    map: map,
  });
}

window.initMap = initMap;
