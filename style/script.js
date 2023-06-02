var map = L.map('map').setView([-0.000800,0.001607], 18.5);

// var popup = L.popup()
//     .setLatLng([-0.000700,0.001607])
//     .setContent("Testing")
//     .openOn(map);

// var iconHouse = L.icon({
//     iconUrl: 'img/iconHouse.png',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
// })

function getColor(d) {
    return d == 'Jalan' ? "grey" :
           d == 'Industri' ? "grey" :
           d == 'Security' ? 'black' :
           d == 'Pusat Info' ? 'sky' :
           d == 'Mushola' ? 'grey' :
           d == 'Gazebo' ? 'red' :
           d == 'Taman' ? 'green' :
           d == 'Taman b' ? 'grey' :
           d == 'Unit A' ? 'yellow' :
           d == 'Unit B' ? 'Blue' :
           d == 'Unit C' ? 'yellow' :
           d == 'Unit D' ? 'purple' :
           "white";
}

// Access the features in the collection
const features = Pointer.features;

features.forEach((feature) => {
  // Access the geometry of the feature
  const geometry = feature.geometry;

  
  if (geometry.type === 'Point') {
    
    const coordinates = geometry.coordinates;
    
    const marker = L.marker([coordinates[1], coordinates[0]]);
    
    marker.on('click', function () {
      const properties = feature.properties.Id_Pointer;
      console.log('Marker clicked:', properties);
    });
    
    marker.addTo(map);
  }
});

function RegionStyle(feature){
    return{
        fillColor: getColor(feature.properties.Type),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    }
}

L.geoJson(Region, {style: RegionStyle}).addTo(map);


