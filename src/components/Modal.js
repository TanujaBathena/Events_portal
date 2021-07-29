import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Auth from "./auth";
import "../styles/modal.css";
import { useHistory } from "react-router";
const overlay = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zindex: 1000,
};
const header = {
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",

  borderBottom: "1px solid black",
};
const body = {
  display: "flex",
  flexDirection: "column",
  marginTop: "1%",
  justifyContent: "flex-start",
  width: "100%",
  height:"50px",
  marginBottom: "auto",
  // overflow: 'ellipsis', textOverflow: 'ellipsis',
  wordBreak:"break",
  whiteSpace: 'pre-wrap', overflowWrap: 'break-word'
};
const h45 = {
  marginLeft: "3%",
  display: "block",
  width: "80%",
  height:"20px"
};
const Modal = (props) => {
  let history = useHistory();
  if (!props.isOpen) return null;

  const handleInterested = async () => {
    const description = await prompt(
      "Why do you want to collaborate with person"
    );
    if (description != null) {
      console.log(description);
      console.log(description, props.ID);
      axios
        .post(
          "http://localhost:4444/Profile/interested",
          {
            post_mong_id: props.ID,
            AlertDescription: description,
          },
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        )
        .then((res) => {
          if (res.data !== "notloggedin") {
            Auth.login();
            //   setCards(res.data);
            //   setIsLoading(true);
            console.log(res.data);
            history.push("/myrequests");
          }
        });
    } else {
      alert("please fill the description");
    }
  };

  return (
    <div style={overlay}>
      <div className="modal">
        <div style={header}>
          <div style={{ marginLeft: "3%" }}>{props.title}</div>

          <FontAwesomeIcon
            icon={faWindowClose}
            size="2x"
            onClick={props.onClose}
            style={{ marginLeft: "auto" }}
          />
        </div>
        <div style={body}>
          <h4 style={h45}>Posted By</h4>
          <h5 style={h45}>{props.name}</h5>
        </div>
        <div style={body}>
          <h4 style={h45}>Description</h4>
          <h5 style={h45}>{props.description}</h5>
        </div>

        <div style={body}>
          <h4 style={h45}>Skills Required</h4>
          <h5 style={h45}>{props.skills}</h5>
        </div>

        <button
          onClick={handleInterested}
          className="btn"
          type="submit"
          style={{ marginTop: "auto", marginRight: "50%" }}
        >
          Interested
        </button>
      </div>
    </div>
  );
};

export default Modal;
