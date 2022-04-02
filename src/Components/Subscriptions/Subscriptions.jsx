import React from "react";
import "./Subscriptions.scss";
import { NavLink } from "react-router-dom";
import { Context as ThemeContext } from "../../Context/Theme";

function Subscriptions({ users }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="sub">
      <h2 className={`sub__title ${theme ? "dark" : ""}`}>Subscriptions</h2>
      <ul className="list-unstyled sub__list">
        {users.length > 0 &&
          users?.map((user) => (
            <li key={user.id} className="sub__item">
              <NavLink className="sub__link" to={`/channel/${user.id}`}>
                <img
                  className="sub__avatar"
                  src={user.avatar}
                  width={26}
                  height={26}
                  alt=""
                />{" "}
                {user.first_name} {user.last_name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Subscriptions;
