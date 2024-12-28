import React from "react";
import banner from "../../images/haat-bazar.jpg";
import logo from "../../images/haat-bazar.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative h-[20vh] w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          background: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Link to="/">
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </Link>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          HAAT-BAZAR{" "}
        </h1>
      </div>
    </div>
  );
};

export default Header;
