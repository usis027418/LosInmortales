var marcadores = [{
  Id: 1,
  Nome: "San Salvador",
  Endereco: "Dry Cleaning Martinizing Roosevelt",
  Latitude: 13.700783,
  Longitude: -89.217208
}, {
  Id: 2,
  Nome: "Usulután",
  Endereco: "Usulután, CA-2, Usulután",
  Latitude: 13.344385,
  Longitude: -88.445042
}, {
  Id: 3,
  Nome: "La Unión",
  Endereco: "La Union, La Unión",
  Latitude: 13.334890,
  Longitude: -87.849134
}];

var usuario = new google.maps.LatLng(13.68793, -88.71914);

//definindo las opciones del mapa
var opcoes = {
  // Pocisionamiento del usuario en el mapa
  center: usuario,
  // definiendo o nível de zoom
  zoom: 9
}

//creando el mapa
var meuMapa = new google.maps.Map(mapa, opcoes);

//Marcador

var addPin = function(marker) {
  var latLon = new google.maps.LatLng(marker.Latitude, marker.Longitude);
  var pin = new google.maps.Marker({
    position: latLon,
    map: meuMapa,
    title: marker.Nome,
    icon: 'https://cdn0.iconfinder.com/data/icons/gloss-basic-icons-by-momentum/32/pin-red.png',
    animation: google.maps.Animation.DROP
  });
  
  //Definiendo el contenido de cada pin
  var conteudo = "<h3>" + marker.Nome + "</h3><p>" + marker.Endereco + "</p>";
  
  //Creando la ventana de informacion
  var janela = new google.maps.InfoWindow({
    content: conteudo,
    maxWidth: 800
  });
  
  //Evento al dar click a un marcador
  google.maps.event.addListener(pin, "click", function() {
    janela.open(meuMapa, pin); //
  });
}

for (i=0;i<marcadores.length;i++) {
  addPin(marcadores[i]);
}