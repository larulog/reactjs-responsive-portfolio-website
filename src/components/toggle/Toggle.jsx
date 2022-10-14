import React, { useContext, useState } from "react";
import "./toggle.css";
import DarkModeToggle from "react-dark-mode-toggle";
import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t" onClick={handleClick}>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
    </div>
  );
};

export default Toggle;
