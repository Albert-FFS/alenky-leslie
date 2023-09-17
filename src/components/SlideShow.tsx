import React from "react";
import "../styles/SlideShow.css";
import Banner01 from "./img/Banner 01.jpg";
import Banner02 from "./img/Banner 02.jpg";
import Banner03 from "./img/Banner 03.jpg";
import Banner04 from "./img/Banner 04.jpg";
import Banner05 from "./img/Banner 05.jpg";
import Banner06 from "./img/Banner 06.jpg";
import Banner07 from "./img/Banner 07.jpg";
import Banner08 from "./img/Banner 08.jpg";
import Banner09 from "./img/Banner 09.jpg";
import Banner10 from "./img/Banner 10.jpg";

export default function SlideShow() {
  const SlideShowContainer = document.querySelector(".SlideShow");
  const Banners = SlideShowContainer?.querySelectorAll("img");
  const ScrollSlideShow = () =>{

  }
  return (
    <div className="SlideShow">
      <button type="button">❮</button>
      <img src={Banner01} alt="Banner 01" />
      <img src={Banner02} alt="Banner 02" />
      <img src={Banner03} alt="Banner 03" />
      <img src={Banner04} alt="Banner 04" />
      <img src={Banner05} alt="Banner 05" />
      <img src={Banner06} alt="Banner 06" />
      <img src={Banner07} alt="Banner 07" />
      <img src={Banner08} alt="Banner 08" />
      <img src={Banner09} alt="Banner 09" />
      <img src={Banner10} alt="Banner 10" />
      <button type="button">❯</button>
    </div>
  );
}
