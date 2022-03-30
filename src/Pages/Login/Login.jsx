import React from "react";
import "./Login.scss";
import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material/";
import SiteLogo from "../../Assets/Images/SIte-logo.svg";
import { Context as LoginContext } from "../../Context/Login";

const useStyles = makeStyles({
  input: {
    width: "300px",
  },
});
function Login() {
  const classes = useStyles();
  const { setToken } = React.useContext(LoginContext);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { user_email, user_password } = evt.target.elements;

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user_email.value.trim(),
        password: user_password.value.trim(),
      }),
    });
    const data = await res.json();
    if (data) {
      setToken(data?.token);
    }
  };
  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <img
          className="login__logo"
          src={SiteLogo}
          alt="site logo You tube"
          width={125}
        />
        <div className="login__user--email">
          <TextField
            className={classes.input}
            label="Login"
            variant="outlined"
            defaultValue="eve.holt@reqres.in"
            name="user_email"
          />
        </div>
        <div className="login__user--password">
          <TextField
            className={classes.input}
            label="Password"
            type="password"
            defaultValue="cityslicka"
            name="user_password"
          />
        </div>

        <Button type="submit" variant="contained">
          Contained
        </Button>
      </form>
    </main>
  );
}

export default Login;
