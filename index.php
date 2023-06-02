<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transit House</title>

    <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <link rel="stylesheet" href="leaflet/leaflet.css">
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    

    <div class="card m-5">
        <div class="card-title text-center text-md">
            Mapping Transit House
        </div>
        <div class="card-body shadow">
            <div class="" id="map" style="top: 0; left:0; right:0; bottom: 0; width: 100%; height: 500px;">

            </div>
        </div>
    </div>

    <?php include('infoDialog.php'); ?>

    <script src="leaflet/leaflet.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="bootstrap/js/bootstrap.js"></script>

    <script src="Mapping/Pointer_font_point.js"></script>
    <script src="Mapping/Zona_region.js"></script>

    <script src="style/jquery-3.3.1.min.js"></script>

    <script src="style/script.js"></script>


</body>
</html>