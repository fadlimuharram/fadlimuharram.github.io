import React from "react";
import Card from "../Card";
import chat001 from "../../../../img/chatreact1.png";
import chat002 from "../../../../img/chatreact2.png";
import chat003 from "../../../../img/chatreact3.png";

const Chatting = () => (
  <Card
    title="Aplikasi Chating Sederhana Dengan React dan Firebase"
    desc="Projek ini bertujuan untuk pembelajaran saya, di mana dalam
                projek ini saya menggunakan react sebagai frontend dan
                firebase sebagai database, untuk state container menggunakan
                library bernama redux"
    poto1={{
      alt: "Photo 1",
      src: chat001
    }}
    poto2={{
      alt: "Photo 2",
      src: chat002
    }}
    poto3={{
      alt: "Photo 3",
      src: chat003
    }}
    descTag="Teknologi yang di gunakan : javascript, react, semantic ui,
                firebase database, firebase storage, firabase authentication"
    date="November 2018"
  />
);

export default Chatting;
