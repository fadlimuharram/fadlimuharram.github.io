import React from "react";
import Card from "../Card";
import hm001 from "../../../../img/hm001.png";
import hm002 from "../../../../img/screencapture-himtiunas-or-id-admin-dashboard-2018-10-30-09_12_16.png";
import hm003 from "../../../../img/screencapture-himtiunas-or-id-himtilogin-2018-10-30-09_11_25.png";

const Himti = () => (
  <Card
    title="Membuat Website Himpunan"
    desc="pada website ini menggunakan bootstrap sebgai css framwrok dan
              adminbsb sebgai template pada halam admin"
    poto1={{
      alt: "Photo 1",
      src: hm001
    }}
    poto2={{
      alt: "Photo 2",
      src: hm002
    }}
    poto3={{
      alt: "Photo 3",
      src: hm003
    }}
    descTag="Teknologi yang di gunakan : codeigniter, bootstrap, jquery, google
              recaptcha, google analytics, datatables, dropzone, lazyload"
    date="January 2018"
  />
);

export default Himti;
