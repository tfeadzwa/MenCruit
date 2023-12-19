import SVGIcon from "./SVGIcon";
import MenuItem from "./MenuItem";
import { useState, useCallback } from "react";
import MenuItems from "../utils/menuItems.json";

const Header = () => {
  const [showDropdown, setDropdown] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setDropdown(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setDropdown(null);
  }, []);

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__left-section">
          <a href="#home" className="mencruit-logo">
            MenCruit
          </a>
          <div className="hide-for-mobile">
            <ul className="header__links">
              {MenuItems.map((menuItem, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {menuItem.title} <SVGIcon />
                  {showDropdown === index && (
                    <MenuItem menuItem={menuItem.menu} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="header__right-section">
          <div className="buttons">
            <a href="#login" className="login-btn">
              Log In
            </a>
            <a href="#signup" className="signup-btn">
              Join
            </a>
          </div>
          <a
            id="hamburger"
            href="#hamburger"
            className="header__toggle hide-for-desktop"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
