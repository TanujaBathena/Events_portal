import { React, useState, useEffect } from "react";
import axios from "axios";
import Auth from "./auth";
import "../styles/profile.css";
import Loader from "./Loader";
const MyProfile = () => {
  let [Name, setName] = useState("");
  let [Year, setYear] = useState("");
  let [Mailid, setMailid] = useState("");
  let [user_profile, setuser_profile] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get("https://b463a02abd34.ngrok.io/Profile/", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data !== "notloggedin") {
          Auth.login();
          setName(res.data.Name);
          setMailid(res.data.Mail_Id);
          setuser_profile(res.data.user_profile);
          setYear(res.data.year);
          setIsLoading(true);
        } else {
          window.location.reload();
        }
      });
  }, []);

  if (!isLoading) return <Loader />;
  else {
    return (
      <div className="containerp">
        <div className="profilepage">
          <img
            src={user_profile}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "50%",
              boxShadow: "2px 2px 2px 2px #888888",
            }}
            alt=""
          />
        </div>
        <div className="part">
          <h4>Name</h4>
          <h5>{Name}</h5>
        </div>
        <div className="part">
          <h4>Mail</h4>
          <h5>{Mailid}</h5>
        </div>
        <div className="part">
          <h4>Batch:</h4>
          <h5>
            {Year}-{parseInt(Year) + 4}
          </h5>
        </div>
      </div>
    );
  }
};

export default MyProfile;
