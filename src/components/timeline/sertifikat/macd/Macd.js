import React from "react";
import Card from "../Card";
import img from "../../../../img/Sertifikat-Kelulusan-Menjadi-Azure-Cloud-Developer.jpg";

const Macd = () => (
  <Card
    title="Menjadi Azure Cloud Developer"
    img={{
      alt: "Menjadi Azure Cloud Developer",
      src: img
    }}
    completed="selesaikan pada April 2019"
    linkCertificate="https://www.dicoding.com/users/261908/academies"
  />
);

export default Macd;
