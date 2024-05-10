<?php
    //---------------CONNECT DATABASE----------------------//
    $hostname = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'portofolio';
    $conn = mysqli_connect($hostname, $username, $password, $dbname) or die('gagal terhubung ke database');

    //------------------KIRIM DATA KE SQL-------------------//
    if ($_SERVER["REQUEST_METHOD"] == 'POST') {
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $no_telp = $_POST['telp'];
        $pesan = $_POST['pesan'];

        // Query SQL untuk menyimpan data ke dalam database
        $query = "INSERT INTO contact(nama, email, telp, pesan) VALUES ('$nama', '$email', '$no_telp', '$pesan')";

        // Eksekusi query
        if (mysqli_query($conn, $query)) {
            
            echo '<script>alert("Data telah terkirim!");</script>';
            
            // Redirect ke halaman HTML

            echo '<script>window.location.href = "index.html";</script>';

        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($conn);
        }
    }
?>