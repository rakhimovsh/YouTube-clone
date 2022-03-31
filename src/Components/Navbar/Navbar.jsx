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
            <img className="navbar__icon" src={home} alt="" /> Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/trending"}>
            <img className="navbar__icon" src={Trending} alt="" /> Trending
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/Subscriptions"}>
            <img className="navbar__icon" src={sub} alt="" /> Subscriptions
          </NavLink>
        </li>
        <li className="navbar__item"> </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/Library"}>
            <img className="navbar__icon" src={lib} alt="" /> Library
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/History"}>
            <img className="navbar__icon" src={history} alt="" /> History
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/later"}>
            <img className="navbar__icon" src={later} alt="" /> Watch later
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/Favourites"}>
            <img className="navbar__icon" src={fav} alt="" /> Favourites
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/Liked"}>
            <img className="navbar__icon" src={like} alt="" /> Liked videos
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/Music"}>
            <img className="navbar__icon" src={music} alt="" /> Music
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/Games"}>
            <img className="navbar__icon" src={games} alt="" /> Games
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={"/Show"}>
            <img className="navbar__icon" src={more} alt="" /> Show more
          </NavLink>
        </li>
      </ul>
      <Subscriptions />
      <NavLink className="navbar__link navbar__settings" to={"/Settings"}>
        <img className="navbar__settingsImg" src={Settings} alt="" /> Settings
      </NavLink>
    </section>
  );
}

export default Navbar;
