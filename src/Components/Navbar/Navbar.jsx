import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import home from "../../Assets/Images/home.png";
import Trending from "../../Assets/Images/trending.png";
import sub from "../../Assets/Images/sub.png";
import lib from "../../Assets/Images/lib.png";
import history from "../../Assets/Images/history.png";
import later from "../../Assets/Images/later.png";
import fav from "../../Assets/Images/fav.png";
import like from "../../Assets/Images/like.png";
import music from "../../Assets/Images/music.png";
import games from "../../Assets/Images/games.png";
import more from "../../Assets/Images/more.png";
import Subscriptions from "../Subscriptions/Subscriptions";
import Settings from "../../Assets/Images/settings.png";
import { Context as MenuContext } from "../../Context/HamburgerMenu";
function Navbar() {
  const { menu, setMenu } = React.useContext(MenuContext);
  const xRef = React.useRef();
  React.useEffect(() => {
    setMenu(xRef);
  }, [menu]);
  return (
    <section ref={xRef} className="navbar">
      <ul className="list-unstyled p-0 navbar__list">
        <li className="navbar__item">
          <NavLink className="navbar__link--home" to={"/"}>
            <img className="navbar__icon" src={home} /> Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={Trending} /> Trending
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={sub} /> Subscriptions
          </NavLink>
        </li>
        <li className="navbar__item"> </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={lib} /> Library
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={history} /> History
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={later} /> Watch later
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={fav} /> Favourites
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={like} /> Liked videos
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={music} /> Music
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={games} /> Games
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/"}>
            <img className="navbar__icon" src={more} /> Show more
          </NavLink>
        </li>
      </ul>
      <Subscriptions />
      <NavLink className="navbar__link navbar__settings" to={"/"}>
        <img className="navbar__settingsImg" src={Settings} /> Settings
      </NavLink>
    </section>
  );
}

export default Navbar;
