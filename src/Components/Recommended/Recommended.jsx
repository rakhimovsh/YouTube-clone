import React from "react";
import "./Recommended.scss";
import { NavLink } from "react-router-dom";
import { Context as ThemeContex } from "../../Context/Theme";

function Recommended({ videos }) {
  const { theme } = React.useContext(ThemeContex);
  return (
    <ul className="recommended">
      {videos.length > 0 &&
        videos.map((video) => (
          <li className="recommended__item" key={video.id}>
            <NavLink className={"recommended__link"} to={`/video/${video.id}`}>
              <img
                className="recommended__img"
                src={video.url}
                alt={video.title}
                width={540}
                height={300}
              />
              <h4 className={`recommended__title ${theme ? "dark" : ""}`}>
                {video.title}
              </h4>
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default Recommended;
