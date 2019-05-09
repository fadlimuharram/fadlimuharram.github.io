import React from "react";
import Card from "./Card";
import Himti from "./himti/Himti";
import Absensi from "./absensi/Absensi";
import Detomatoes from "./detomatoes/Detomatoes";
import Chatting from "./chatting/Chatting";
import AbsenAndro from "./absenandro/AbsenAndro";
import AbsenPanel from "./absenpanel/AbsenPanel";
import Gcommerce from "./gcommerce/Gcommerce";
import Pokedumb from "./pokedumb/Pokedumb";

const Project = () => (
  <div id="project" className="tmclassName">
    <div className="timeline">
      <ul>
        <li>
          <Himti />
        </li>
        <li>
          <Absensi />
        </li>
        <li>
          <Detomatoes />
        </li>
        <li>
          <Chatting />
        </li>
        <li>
          <AbsenAndro />
        </li>
        <li>
          <AbsenPanel />
        </li>
        <li>
          <Gcommerce />
        </li>
        <li>
          <Pokedumb />
        </li>
      </ul>
    </div>
  </div>
);

export default Project;
