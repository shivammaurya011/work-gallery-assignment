import React from "react";
import logo from "../../assets/logo.png";

function HeroSection() {
  return (
    <div className="flex items-center justify-center py-10 px-32">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hello, I’m <br /> Andres <br /> Gallardo
        </h1>
      </div>
      <div className="pl-40">
        <p className="text-lg text-gray-700 mb-8">
          Unleash Creativity, Capture Vision: <br /> Your Journey Through My{" "}
          <br /> Portfolio Begins Here.
        </p>
      </div>
      <div className="pt-10 pr-60">
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
      </div>
    </div>
  );
}
export default HeroSection;
