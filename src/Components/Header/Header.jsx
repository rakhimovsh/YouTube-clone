import React from "react";
import "./Header.scss";
import HamburgerMenu from "../../Assets/Images/hamburger-menu.png";
import SiteLogo from "../../Assets/Images/SIte-logo.svg";
import Phone from "../../Assets/Images/phone-18.png";
import Dot from "../../Assets/Images/dotCollection.png";
import Notification from "../../Assets/Images/notification.png";
import User from "../../Assets/Images/Userpic.png";
import { NavLink } from "react-router-dom";
import { Context as MenuContext } from "../../Context/HamburgerMenu";
import { Context as ThemeContext } from "../../Context/Theme";

function Header() {
  const { menu } = React.useContext(MenuContext);
  const handleClick = () => {
    menu.current.classList.toggle("close");
  };
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <header className={`header ${theme ? "dark" : ""}`}>
      <button onClick={handleClick} className="header__btn--menu">
        <img className="header__logo" src={HamburgerMenu} alt="menu" />
      </button>
      <NavLink to={"/"}>
        <img src={SiteLogo} alt="" width={116} height={25} />
      </NavLink>
      <input
        className={`header__search ${theme ? "dark" : ""}`}
        type="text"
        placeholder="Search"
        autoComplete="off"
      />
      <div className="header__right">
        <NavLink to={"/"}>
          <img src={Phone} alt="" />
        </NavLink>
        <button className="btn" onClick={() => setTheme(!theme)}>
          <img src={Dot} alt="" />
        </button>
        <NavLink to={"/"}>
          <img src={Notification} alt="" />
        </NavLink>
      </div>
      <NavLink to={"/"}>
        <img src={User} alt="user picture" width={40} height={40} />
      </NavLink>
    </header>
  );
}

export default Header;
