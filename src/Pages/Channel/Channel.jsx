import React from "react";
import "./Channel.scss";
import { useParams } from "react-router-dom";
import backgroundImg from "../../Assets/Images/background.jpg";
import bellImg from "../../Assets/Images/ui-11.png";
import lupaImg from "../../Assets/Images/lupa.png";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";
import Videos from "../../Components/Videos/Videos";
import { NavLink } from "react-router-dom";
import { Context as ThemeContext } from "../../Context/Theme";

function Channel() {
  const params = useParams();
  const [users, setUsers] = React.useState({});
  const [video, setVideo] = React.useState([]);
  const { theme } = React.useContext(ThemeContext);
  React.useEffect(() => {
    const callUsers = async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const data = await res.json();
      setUsers(data?.data);
    };
    callUsers();
  }, []);
  React.useEffect(() => {
    const callVideo = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setVideo(data);
    };
    callVideo();
  }, []);
  const user = users.length > 0 && users.find((u) => u.id == params.channelId);
  const singleVideo =
    video.length > 0 && video.find((v) => v.id == params.channelId);
  const usersReco = users.length > 0 && users.slice(1, 4);
  const videosBottom = video.length > 0 && video.slice(user.id, user.id + 10);
  return (
    <section className="channel">
      <img className="channel__background" src={backgroundImg} alt="" />
      <div className="channel__info">
        <div className="channel__user d-flex align-items-center justify-content-between">
          <div className={`channel__user--name ${theme ? "dark" : ""}`}>
            <img
              className="channel__userImg"
              src={user.avatar}
              alt={`user ${user.first_name}`}
              width={50}
              height={50}
            />
            {user.first_name} {user.last_name}
          </div>
          <div className="d-flex align-items-center">
            <img src={bellImg} alt="" />
            <button
              onClick={(evt) => (evt.target.textContent = "Subscribed")}
              className="btn btn-danger rounded-pill ms-4"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="channel__nav">
          <ul className="list-unstyled p-0 d-flex align-items-center channel__list">
            <li className={`channel__item ${theme ? "dark" : ""} active`}>
              Home
            </li>
            <li className={`channel__item ${theme ? "dark" : ""}`}>Videos</li>
            <li className={`channel__item ${theme ? "dark" : ""}`}>
              Playlists
            </li>
            <li className={`channel__item ${theme ? "dark" : ""}`}>Channels</li>
            <li className={`channel__item ${theme ? "dark" : ""}`}>
              Discussion
            </li>
            <li className={`channel__item ${theme ? "dark" : ""}`}>About</li>
            <li className={`channel__item ${theme ? "dark" : ""}`}>
              <img src={lupaImg} alt="" />
            </li>
          </ul>
        </div>
        <div className="channel__player d-flex justify-content-between">
          <div className="d-flex">
            <NavLink to={`/video/${singleVideo.id}`}>
              <img
                className="channel__video"
                src={singleVideo.url}
                alt=""
                width={400}
                height={250}
              />
            </NavLink>

            <div className="channel__videoDesc ms-4">
              <h2 className={`channel__title ${theme ? "dark" : ""}`}>
                {singleVideo.title}
              </h2>
              <p className={`channel__desc ${theme ? "dark" : ""}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates molestias dolor rerum nobis neque sequi,
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Subscriptions users={usersReco} />
          </div>
        </div>
        <div className="channel__videoCollection">
          <h4 className={`mb-4 channel__title--author ${theme ? "dark" : ""}`}>
            {user.first_name} {user.last_name} videos
          </h4>
          <Videos videos={videosBottom} />
        </div>
      </div>
    </section>
  );
}

export default Channel;
