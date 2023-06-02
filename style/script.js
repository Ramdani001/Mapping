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

function openModalWithData(data) {
  var nameInput = document.getElementById('Id_Unit');
  var emailInput = document.getElementById('Name_Unit');

  // Mengisi nilai form input dengan data dari fitur koleksi
  nameInput.value = data.Id_Pointer;
  emailInput.value = data.Name_Point;

  // Membuka modal dialog
  $('#infoModal').modal('show');

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
      const properties = feature.properties;

        // document.getElementById('Id_Pointer').textContent = properties.Id_Pointer;
        // document.getElementById('Name_Point').textContent = properties.Name_Point;
        // document.getElementById('Coordinates1').textContent = coordinates[1];
        // document.getElementById('Coordinates2').textContent = coordinates[0];
      
        // Menyimpan data ke LocalStorage
        localStorage.setItem('Id_Pointer', properties.Id_Pointer);
        
        $('#infoModal').modal('show');
    });
    
    marker.addTo(map);
  }
});

$('#infoModal').on('show.bs.modal', function () {
  // var Local_Id_Pointer = localStorage.getItem('Id_Pointer');
  // console.log(Local_Id_Pointer);


  
var myData = localStorage.getItem('Id_Pointer');

// Permintaan ke Server
$.ajax({
  url: 'search.php', // Ganti dengan URL endpoint PHP Anda
  method: 'POST', // Ubah metode sesuai kebutuhan Anda
  data: { searchData: myData }, // Kirim data dari LocalStorage ke server
  success: function(response) {
    // Tangani respon dari server
    
    var responseArray = JSON.parse(response);

    console.log(responseArray[0].Id_Zone);
    // console.log(responseArray.length);
    console.log(typeof responseArray);

    $('#Id_Zona').val(responseArray[0].Id_Zone);
    $('#Name_Zona').val(responseArray[0].Nama_Zone);



  },
  error: function(error) {
    console.error('Error:', error);
  }
});


});


// $(document).on('click', '#getIdPointer', function() {
//   var Local_Id_Pointer = localStorage.getItem('Id_Pointer');
//   console.log(Local_Id_Pointer);
// });


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
