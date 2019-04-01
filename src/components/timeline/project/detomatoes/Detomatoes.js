import React from "react";
import Card2 from "../Card2";

import detomatoes001 from "../../../../img/detomatoes2.png";
import detomatoes002 from "../../../../img/detomatoes1.png";
import detomatoes003 from "../../../../img/detomatoes3.png";

const Detomatoes = () => (
  <Card2
    title="Detomatoes"
    desc="project ini saya gunakan sebagai tugas akhir saya dengan judul
                Pendeteksi Penyakit Pada Tanaman Daun Tomat Menggunakan
                Convolution Neural Netowrk, di mana pada webiste ini
                menggunakan 2 bahasa pemrograman utama yaitu python sebgai
                server dan javascript (React Native) sebagai client, serta
                komunikasi yang di gunakan antara client server adalah RestAPI"
    poto1={{
      alt: "Photo 1",
      src: detomatoes001
    }}
    poto2={{
      alt: "Photo 2",
      src: detomatoes002
    }}
    poto3={{
      alt: "Photo 3",
      src: detomatoes003
    }}
    descTag="Teknologi yang digunakan: Python, Keras, Flask, Rest API,
                Javascript, React Native, Redux, Firebase, Deep Learning, CNN"
    date="Desember 2018"
  />
);

export default Detomatoes;
