import React from "react";

const Card = ({ img, title, completed, desc, linkCertificate }) => (
  <div class="sertifikat">
    <div class="sertifikat--header">
      <img src={img.src} alt={img.alt} class="sertifikat--img" />
    </div>
    <div class="sertifikat--body">
      <h4 class="sertifikat--body__nama">{title}</h4>
      <p class="sertifikat--body__desc">
        {desc !== null
          ? desc
          : `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        repellat.`}
      </p>
      <p class="sertifikat--body__tanggal">
        <i class="socmend--icon icon-ok">&#xe801;</i> &nbsp; &nbsp; Di
        {completed}
      </p>
      {linkCertificate && (
        <a
          href={linkCertificate}
          target="_blank"
          class="sertifikat--body__link btn-text"
        >
          lihat sertifikat &rarr;
        </a>
      )}
    </div>
  </div>
);

export default Card;
