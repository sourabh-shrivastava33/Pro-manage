import React from "react";
import { Navlink } from "../assets/styled-components/Navlink";

const Navlinks = ({ text, path, icon, darkIcon }) => {
  return (
    <Navlink to={path} end>
      <img src={icon} alt="icon" className="light-icon" />
      <img src={darkIcon} alt="icon" className="dark-icon" />
      <span>{text}</span>
    </Navlink>
  );
};

export default Navlinks;
