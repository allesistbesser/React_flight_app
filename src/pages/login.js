import React, { useState, useContext } from "react";
import { LoginUser } from "../Utils/Functions";
import { FlightContext } from "../context/FlightContext";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();
  const { settoken, token, setislogin } = useContext(FlightContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginBtn = () => {
    LoginUser({ username, password })
      .then((response) => settoken(response.token))
      .then((response) => setislogin(true))
      .catch((error) => console.log(error));
    history.push("/");
  };
  console.log(token);
  return (
    <div className="container col-6">
      <br />
      <br />
      <h1>Please Login</h1>
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="username" className="form label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Username enter here"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={loginBtn} className="btn btn-primary">
        Login
      </button>
    </div>
  );
}
export default Login;
