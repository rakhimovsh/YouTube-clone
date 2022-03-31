import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import Videos from "../../Components/Videos/Videos";
import Recommended from "../../Components/Recommended/Recommended";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "vlack",
    height: 48,
    padding: "0 30px",
  },
});

function Home() {
  const [users, setUsers] = React.useState({});
  const [video, setVideo] = React.useState({});
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
  const classes = useStyles();
  const splicedVideos = video.length > 0 && video.slice(0, 10);
  const videoReco = video.length > 0 && video.slice(10, 20);
  const videoBottom = video.length > 0 && video.slice(20, 30);
  const user = users.length > 0 && users.find((u) => u.id == 8);
  const userBottom = users.length > 0 && users.find((u) => u.id == 10);
  return (
    <section className="basic">
      <div className="hero">
        <NavLink className={"basic__link--hero"} to={`/channel/${user.id}`}>
          <img
            className="basic__user--hero"
            src={user.avatar}
            alt=""
            width={50}
            height={50}
          />
          {user.first_name} {user.last_name}
        </NavLink>
        <Videos videos={splicedVideos} />
      </div>
      <div className="reco">
        <h3 className="reco-title">Recommended</h3>
        <Recommended videos={videoReco} />
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <NavLink
            className={"basic__link--hero"}
            to={`/channel/${userBottom.id}`}
          >
            <img
              className="basic__user--hero"
              src={userBottom.avatar}
              alt=""
              width={50}
              height={50}
            />
            {userBottom.first_name} {userBottom.last_name}
          </NavLink>
          <Button
            className={classes.root}
            onClick={(evt) => (evt.target.textContent = "Subscribed")}
            variant="contained"
          >
            Subscribe
          </Button>
        </div>
        <Videos videos={videoBottom} />
      </div>
    </section>
  );
}

export default Home;
