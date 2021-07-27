import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import "../styles/modal.css";
import axios from "axios";
import Auth from "./auth"


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
  marginTop:"3%",
  justifyContent: "flex-start",
  gap: "5%",
  width: "100%",
  height: "85%",
};

const ModalReceived = (props) => {
  if (!props.isOpen) return null;
    const submit = (status)=>{
        let description=""
        if (status===2){
            description = prompt(
                "where/How/when contact/meet him"
            );
        }
        if (description!=null){
        axios.post(
        "http://localhost:4444/Profile/confirmrequest",
        {
          post_mong_id: props.post_mong_id,
          AlertDescription: description,
          status:status,
          requesteduserid: props.requesteduserid
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
        }
      });
    }
    else{
        alert("please fill the description")
    }
}
  

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
          <h4
            style={{
              marginLeft: "3%",
              display: "block",
              width: "20%",
            }}
          >
            Posted By
          </h4>
          <h5 style={{ display: "block", width: "70%" }}>{props.name}</h5>
        </div>
        <div style={body}>
          <h4
            style={{
              marginLeft: "3%",
              display: "block",
              width: "20%",
            }}
          >
            Description
          </h4>
          <h5
            style={{
              display: "block",
              width: "70%",
              boxSizing: "border-box",
              wordWrap: "break-word",
            }}
          >
            {props.description}
          </h5>
        </div>
        <div style={body}>
          <h4 style={{ marginLeft: "3%", display: "block", width: "20%" }}>
            Your Description
          </h4>
          <h5 style={{ display: "block", width: "70%" }}>{props.yourdescription}</h5>
        </div>
        <div style={body}>
          <h4 style={{ marginLeft: "3%", display: "block", width: "20%" }}>
            Skills Required
          </h4>
          <h5 style={{ display: "block", width: "70%" }}>{props.skills}</h5>
        </div>
        <div style={body}>
                    
        <button className="btn" type="submit"style={{marginLeft:"auto"}} onClick={()=>submit(0)}>
          reject
        </button>
        <button className="btn" type="submit" onClick={()=>submit(2)}>
          accept
        </button>
        </div>

      </div>
    </div>
  );
};

export default ModalReceived;
