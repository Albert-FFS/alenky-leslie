import React from "react";
import "../styles/Footer.css";
import IconInstagram from "./icons/instagram.svg";
import IconPatreon from "./icons/patreon.svg";
import IconTwitter from "./icons/twitter-X.svg";
import IconWebtoon from "./icons/webtoon.svg";
import IconYoutube from "./icons/youtube.svg";
export default function Footer() {
  return (
    <footer>
      <div className="AboutMe">
        <h4 >Acerca De Mi</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam
          numquam repudiandae obcaecati accusamus nostrum. Eveniet
          exercitationem, ullam quae error laboriosam mollitia laudantium
          perspiciatis tenetur saepe ratione dignissimos inventore quas.
        </p>
      </div>
      <div className="LinksFooter">
        <a href="#" target="_blank" rel="noopener noreferrer">
          Acerca De Mi
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Información
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Testimonios
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Términos y Condiciones
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Politica y Privacidad
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Licencias
        </a>
      </div>
      <div className="SocialMedia">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={IconInstagram} alt="Icon Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={IconPatreon} alt="Icon Patreon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={IconTwitter} alt="Icon Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={IconWebtoon} alt="Icon Webtoon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={IconYoutube} alt="Icon Youtube" />
        </a>
      </div>
    </footer>
  );
}
