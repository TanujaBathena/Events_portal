import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import "../styles/modal.css";
import axios from "axios";
import Auth from "./auth";

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

  marginBottom: "auto",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
};
const h45 = {
  marginLeft: "3%",
  display: "block",
  width: "80%",
};

const ModalReceived = (props) => {
  if (!props.isOpen) return null;
  const submit = (status, deleted) => {
    let description = "";
    if (status === 2 && props.deleted === false) {
      console.log("inside accepted requests");
      description = prompt("where/How/when contact/meet him");
      if (description != null) {
        axios
          .post(
            "https://b463a02abd34.ngrok.io/Profile/acceptrequest",
            {
              post_mong_id: props.post_mong_id,
              AlertDescription: description,
              status: status,
              requesteduserid: props.requesteduserid,
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
              window.location.reload();
            }
          });
      } else {
        alert("please fill the description");
      }
    } else if (status === 0) {
      console.log("inside reject requests");
      axios
        .post(
          "https://b463a02abd34.ngrok.io/Profile/rejectedrequest",
          {
            post_mong_id: props.post_mong_id,
            status: status,
            requesteduserid: props.requesteduserid,
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
            window.location.reload();
          }
        });
    } else {
      console.log("inside delete accepted request");
      if (deleted === true) {
        axios
          .post(
            "https://b463a02abd34.ngrok.io/Profile/deleteacceptedrequest",
            {
              post_mong_id: props.ID,
              status: status,
              requesteduserid: props.requesteduserid,
              deleted: true,
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
              window.location.reload();
            }
          });
      } else {
        axios
          .post(
            "https://b463a02abd34.ngrok.io/Profile/deleteacceptedrequest",
            {
              post_mong_id: props.post_mong_id,
              status: status,
              requesteduserid: props.requesteduserid,
              deleted: false,
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
              window.location.reload();
            }
          });
      }
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
          <h4 style={h45}>Interested User</h4>
          <h5 style={h45}>{props.name}</h5>
        </div>
        <div style={body}>
          <h4 style={h45}>Interested user's Description </h4>
          <h5 style={h45}>{props.description}</h5>
        </div>
        <div style={body}>
          <h4 style={h45}>Your Description</h4>
          <h5 style={h45}>{props.mydescription}</h5>
        </div>
        <div style={body}>
          <h4 style={h45}>Skills Required</h4>
          <h5 style={h45}>{props.skills}</h5>
        </div>
        {props.status === 1 && (
          <div style={{ flexDirection: "row", justifyContent: "center" }}>
            <button className="btn" type="submit" onClick={() => submit(0)}>
              reject
            </button>
            <button className="btn" type="submit" onClick={() => submit(2)}>
              accept
            </button>
          </div>
        )}

        {props.status === 2 && (
          <button
            className="btn"
            type="submit"
            onClick={() => submit(1000, props.deleted)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalReceived;
