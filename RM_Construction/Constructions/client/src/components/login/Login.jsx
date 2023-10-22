import React, { useState } from "react";
import axios from "axios";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      userName,
      password,
    };

    await axios
      .post("/login", credentials)
      .then((response) => {
        if (response.data.userName === "booking") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Welcome back! Praneeth",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/booking/AddBookinga");
        }
      })
      .catch((error) => {
        Swal.fire("Error!", "Incorrect Username or Password!", "error");
      });
  };

  return (
    <form className="login-form">
      <h1>RM CONSTRUCTIONS</h1>
      <h2>LOGIN</h2>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={onLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;
