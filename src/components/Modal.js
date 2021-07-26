import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import axios from'axios'
import Auth from './auth'

const modal_styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "#ffffff",
  transform: "translate(-50%,-50%",
  width: "50%",
  height: "50vh",
  padding: "10px",
  zindex: "1000",
  display: "flex",
  justifyContent: "space between",
  flexDirection: "column",
};
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
  height: "10%",
  borderBottom: "1px solid black",
};
const body = {
  display: "flex",
  marginTop: "3%",
  justifyContent: "flex-start",
  gap: "15%",
  width: "100%",
};

const Modal = (props) => {
  if (!props.isOpen) return null;

  const handleInterested=async ()=>{
    const description=await prompt("Why do you want to collaborate with person");
    
    console.log(description,props.ID);
    axios
      .post("http://localhost:4444/Profile/interested",{
          post_mong_id:props.ID,
          AlertDescription: description
      }, {
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
        //   setCards(res.data);
        //   setIsLoading(true);
          console.log(res.data)
        }

      });
  }
  
  return (
    <div style={overlay}>
      <div className="modal" style={modal_styles}>
        <div style={header}>
          <div style={{ margin: "auto"   }}><b>{props.title}</b></div>

          <FontAwesomeIcon
            icon={faWindowClose}
            size="2x"
            onClick={props.onClose}
            style={{ marginLeft: "auto" }}
          />
        </div>
        <div style={body}>
          <h4 style={{ marginLeft: "3%", display: "block", width: "10%" }}>
            Name
          </h4>
          <h5 style={{ display: "block", width: "40%" }}>{props.name}</h5>
        </div>
        <div style={body}>
          <h4 style={{ marginLeft: "3%", display: "block", width: "10%" }}>
            Description
          </h4>
          <h5 style={{ display: "block", width: "70%" }}>
              {props.description}
          </h5>
        </div>
        <div style={body}>
          <h4 style={{ marginLeft: "3%", display: "block", width: "10%" }}>
            Skills Required
          </h4>
          <h5 style={{ display: "block", width: "50%" }}>{props.skills}</h5>
        </div>

        <div style={{ alignSelf: "flex-end", margin: "auto" }}>
          <button onClick={handleInterested} className="btn" type="submit">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
