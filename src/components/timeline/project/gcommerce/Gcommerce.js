import React from "react";
import Card from "../Card2";

import gcommerce1 from "../../../../img/gcommerce1.png";
import gcommerce2 from "../../../../img/gcommerce2.png";
import gcommerce3 from "../../../../img/gcommerce3.png";

const Gcommerce = () => (
  <Card
    title="gEcommerce"
    desc="GEcommerce merupakan aplikasi toko online yang berfokus untuk menjual berbagai tanaman hias dan peralatan tanaman"
    poto1={{
      alt: "Photo 1",
      src: gcommerce1
    }}
    poto2={{
      alt: "Photo 2",
      src: gcommerce2
    }}
    poto3={{
      alt: "Photo 3",
      src: gcommerce3
    }}
    descTag="teknologi: react native, adonisjs, mysql, redux, redux presist, raja ongkir, dll"
    date="April 2019"
  />
);

export default Gcommerce;
