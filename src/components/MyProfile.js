import { React, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Auth from "./auth";
import "../styles/profile.css";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import address from "./address";

const MyProfile = () => {
  const options = [
    { label: "CSE", value: "CSE" },
    { label: "EE", value: "EE" },
    { label: "MNC", value: "MNC" },
    { label: "MECH", value: "MECH" },
  ];
  let [Name, setName] = useState("");
  let [Year, setYear] = useState("");
  let [Mailid, setMailid] = useState("");
  let [user_profile, setuser_profile] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [branch, setbranch] = useState("");
  let [branchToDisplay, setBranchToDisplay] = useState("");
  let [showSelect, setSelect] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`http://${address.ip}:4444/Profile/`, {
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
          console.log(res.data);
          setName(res.data.Name);
          setMailid(res.data.Mail_Id);
          setuser_profile(res.data.user_profile);
          setYear(res.data.year);
          setBranchToDisplay(res.data.branch);
          setIsLoading(true);
        } else {
          //   window.location.reload();
        }
      });
  }, []);

  useEffect(() => {
    setSelect(false);
    setBranchToDisplay(branch.value);
    const datatobesent = {
      branch: branch,
    };
    axios
      .post(`http://${address.ip}:4444/profile/editprofile`, datatobesent, {
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
        }
      });
  }, [branch]);
  console.log(showSelect);
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
          <h4>Batch</h4>
          <h5>
            {Year}-{parseInt(Year) + 4}
          </h5>
        </div>
        <div className="part">
          <div style={{ display: "flex" }}>
            <h4>Branch</h4>
            <button
              className="btn"
              style={{
                marginLeft: "auto",
                alignSelf: "flex-end",
              }}
            >
              <FontAwesomeIcon
                icon={faEdit}
                size="1x"
                onClick={() => setSelect(true)}
                style={{ zIndex: -2 }}
              />
            </button>
          </div>

          <h5>{branchToDisplay}</h5>

          {showSelect && (
            <div style={{ marginTop: "20px", width: "100%" }}>
              <Select
                options={options}
                value={branch}
                onChange={setbranch}
                // styles={style}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default MyProfile;
