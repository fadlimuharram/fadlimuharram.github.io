import React from "react";
import Card from "../Card2";

import pokedumb1 from "../../../../img/pokedumb1.png";
import pokedumb2 from "../../../../img/pokedumb2.png";
import pokedumb3 from "../../../../img/pokedumb3.png";

const Pokedumb = () => (
  <Card
    title="Pokedumb"
    desc="Pokedumb merupakan aplikasi dummy pokemon yang bertujuan mencari pokemon berdasarkan lokasi sekitar dengan menggunakan google map dan posisi pengguna"
    poto1={{
      alt: "Photo 1",
      src: pokedumb1
    }}
    poto2={{
      alt: "Photo 2",
      src: pokedumb2
    }}
    poto3={{
      alt: "Photo 3",
      src: pokedumb3
    }}
    descTag="teknologi: react native, adonisjs, mysql, redux, redux presist, google maps, dll"
    date="April 2019"
  />
);

export default Pokedumb;
