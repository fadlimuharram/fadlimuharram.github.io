import React from "react";
import Card from "../Card";

import absen001 from "../../../../img/absen001.png";
import absen002 from "../../../../img/absen002.png";
import absen003 from "../../../../img/absen003.png";

const Absensi = () => (
  <Card
    title="Project Absensi (team)"
    desc="pada project ini terdapat perwakilan dari setiap kelas untuk
              melakukan absensi kehadiran guru setiap harinya dan terdapat user
              dengan level admin"
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
    descTag="Teknologi yang di gunakan : codeigniter, bootstrap, jquery, google
              recaptcha, google analytics, datatables, dropzone, lazyload"
    date="January 2018"
  />
);

export default Absensi;
