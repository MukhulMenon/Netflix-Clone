import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);
  const transitonNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitonNavBar);
    return () => window.removeEventListener("scroll", transitonNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Nav;
