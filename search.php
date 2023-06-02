<?php

// Ambil nilai yang dikirimkan melalui permintaan AJAX
$searchData = $_POST['searchData'];

// Lakukan kueri untuk mencari data berdasarkan nilai
// Contoh: Menggunakan PDO untuk koneksi dan kueri
$host = 'localhost';
$dbname = 'transit_house';
$username = 'root';
$password = '';



try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $conn->prepare("SELECT * FROM info_Unit WHERE Id_Zone = :searchData");
  $stmt->bindParam(':searchData', $searchData);
  $stmt->execute();

  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  if (empty($results)) {
    echo json_encode(['message' => 'Data not found']);
  } else {
    echo json_encode($results);
  }

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>
