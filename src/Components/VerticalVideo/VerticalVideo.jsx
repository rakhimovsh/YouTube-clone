import React from "react";
import "./VerticalVideo.scss";
import { NavLink } from "react-router-dom";
import { Switch } from "@mui/material";
import {Context as ThemeContext} from '../../Context/Theme'

function VerticalVideo({ videos }) {
  const {theme} = React.useContext(ThemeContext)
  return (
    <div className="verticalVideo ps-5">
      <div className="d-flex align-items-center justify-content-between">
        <h3>Next</h3>
        <Switch />
      </div>
      <ul className="list-unstyled p-0 verticalVideo__list">
        {videos.length > 0 &&
          videos.map((video) => (
            <li key={video.id} className="verticalVideo__item">
              <NavLink className={"videos__link"} to={`/video/${video.id}`}>
                <img
                  className="videos__img"
                  src={video.url}
                  alt={video.title}
                  width={250}
                  height={150}
                />
                <h4 className={`videos__title ${theme ? 'dark': ''}`}>{video.title}</h4>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default VerticalVideo;
