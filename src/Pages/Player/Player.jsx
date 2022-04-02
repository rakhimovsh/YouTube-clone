import React from "react";
import "./Player.scss";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LikeImg from "../../Assets/Images/likeImg.png";
import Dislike from "../../Assets/Images/dislike.png";
import Share from "../../Assets/Images/share.png";
import threeDots from "../../Assets/Images/three-dots.svg";
import VerticalVideo from "../../Components/VerticalVideo/VerticalVideo";
function Player() {
  const params = useParams();
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

  const videoPlayer =
    video.length > 0 && video.find((v) => v.id == params.videoId);
  const singleUser = users.length > 0 && users.find((u) => u.id == 12);
  const vertical = video.length > 0 && video.slice(50, 55);

  return (
    <section className="player">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={9}>
            <img className="player__img" src={videoPlayer.url} alt="player" />
            <h2 className="player__title">{videoPlayer.title}</h2>
            <div className="player__videoInfo d-flex align-items-center justify-content-between">
              <p className="player__subInfo">123k views</p>
              <div className="player__likes d-flex">
                <button className="btn rounded-pill player__icon--btn btn-secondary d-flex align-items-center">
                  <img className="player__icon" src={LikeImg} alt="" /> 123k
                </button>
                <button className="btn rounded-pill player__icon--btn btn-secondary d-flex align-items-center">
                  <img className="player__icon" src={Dislike} alt="" /> 123k
                </button>
                <button className="btn rounded-pill player__icon--btn btn-secondary d-flex align-items-center">
                  <img className="player__icon" src={Share} alt="" /> 123k
                </button>
                <button className="player__dots btn ms-4">
                  <img src={threeDots} alt="" width={28} />
                </button>
              </div>
            </div>
            <hr />
            <div className="player__channel d-flex">
              <img
                className="rounded-circle player__user me-4"
                src={singleUser.avatar}
                alt=""
                width={80}
              />
              <div className="palyer__channelInfo">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="m-0 p-0">
                      {singleUser.first_name} {singleUser.last_name}
                    </h3>
                    <p className="m-0 p-0 text-secondary">
                      Published on 14 Jun 2019
                    </p>
                  </div>
                  <button
                    onClick={(evt) => (evt.target.textContent = "Subscribed")}
                    className="btn btn-danger rounded-pill"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="m-0 p-0">
                  A successful marketing plan relies heavily on the
                  pulling-power of advertising copy. Writing result-oriented ad
                  copy is difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write
                  perfect ad copy; it is based on a number of factors, including
                  ad placement, demographic, even the consumer’s mood when they
                  see your ad.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <VerticalVideo videos={vertical} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Player;
