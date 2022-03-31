import React from "react";
import "./Videos.scss";
import { NavLink } from "react-router-dom";

function Videos({ videos }) {
  return (
    <div className="videos">
      <ul className="videos__list">
        {videos.length > 0 &&
          videos.map((user) => (
            <li key={user.id} className="videos__item">
              <NavLink className={"videos__link"} to={`/video/${user.id}`}>
                <img
                  className="videos__img"
                  src={user.url}
                  alt={user.title}
                  width={250}
                  height={150}
                />
                <h4 className="videos__title">{user.title}</h4>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Videos;
