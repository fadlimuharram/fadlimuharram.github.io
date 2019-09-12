import React from "react";
import Card from "../Card";
import img from "../../../../img/SertifikasiKelulusan-MenjadiGoogleCloudEngineer.jpg";

const MenjadiGoogleCloudEngineer = () => (
  <Card
    title="Menjadi Google Cloud Engineer"
    img={{
      alt: "Menjadi Google Cloud Engineer",
      src: img
    }}
    completed="selesaikan pada September 2019"
    linkCertificate="https://www.dicoding.com/users/261908/academies"
  />
);

export default MenjadiGoogleCloudEngineer;
