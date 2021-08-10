import axios from "axios";
import { React, useEffect } from "react";
import { useHistory } from "react-router";
import Auth from "./auth";

const Logout = () => {
  let history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:4444/logout", {
        //sending a get request to the server to destroy the cookies.
        withCredentials: true, //sends the request by adding cookies to html header .
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        Auth.logout();
        history.push("/login");
      });
    //eslint-disable-next-line
  }, []);

  return <div>Logout</div>;
};

export default Logout;
