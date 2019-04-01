import React from "react";
import Card2 from "../Card2";
import absen001 from "../../../../img/andro_absensi001.png";
import absen002 from "../../../../img/andro_absensi003.png";
import absen003 from "../../../../img/andro_absensi002.png";

const AbsenAndro = () => (
  <Card2
    title="Aplikasi Absensi Mahasiswa dengan Android java, Firebase dan
                React (Android App)"
    desc="Projek ini bertujuan untuk pembelajaran saya, di mana dalam
                projek ini saya menggunakan aplikasi android dengan bahasa
                pemrograman java untuk melakaukan absensi dengan barcode,
                react js sebagai admin panel dan firebase sebagai database"
    poto1={{
      alt: "Photo 1",
      src: absen001
    }}
    poto2={{
      alt: "Photo 2",
      src: absen002
    }}
    poto3={{
      alt: "Photo 3",
      src: absen003
    }}
    descTag="Teknologi yang di gunakan : android java, javascript, react,
                semantic ui, firebase database, firebase storage, firabase
                authentication"
    date="February 2019"
  />
);

export default AbsenAndro;
