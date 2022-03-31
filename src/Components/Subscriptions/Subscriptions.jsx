import React from "react";
import "./Subscriptions.scss";
import { NavLink } from "react-router-dom";

function Subscriptions() {
  const [users, setUsers] = React.useState({});
  React.useEffect(() => {
    const callUsers = async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const data = await res.json();
      setUsers(data?.data);
    };
    callUsers();
  }, []);

  return (
    <div className="sub">
      <h2 className="sub__title">Subscriptions</h2>
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
