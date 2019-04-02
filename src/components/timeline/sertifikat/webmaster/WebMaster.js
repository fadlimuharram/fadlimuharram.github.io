import React from "react";
import Card from "../Card";
import img from "../../../../img/itkom-webmaster.jpeg";

const WebMaster = () => (
  <Card
    img={{
      alt: "Web Master",
      src: img
    }}
    title="Khursus Web Master"
    completed="selesaikan pada bulan September 2016"
  />
);

export default WebMaster;
