import React from "react";
import Card from "../Card2";
import absen001 from "../../../../img/absensi_react001.png";
import absen002 from "../../../../img/absensi_react002.png";
import absen003 from "../../../../img/absensi_react003.png";

const AbsenPanel = () => (
  <Card
    title="Aplikasi Absensi Mahasiswa dengan Android java, Firebase dan
                React (Admin Panel)"
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
    date="Februari 2019"
  />
);

export default AbsenPanel;
