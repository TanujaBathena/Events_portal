import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import "../styles/modal.css";

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
};
const h45 = {
  marginLeft: "3%",
  display: "block",
  width: "800%",
};

const ModalRequests = (props) => {
  if (!props.isOpen) return null;

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
          <h4 style={h45}>Your Description</h4>
          <h5 style={h45}>{props.yourdescription}</h5>
        </div>
        <div style={body}>
          <h4 style={h45}>Skills Required</h4>
          <h5 style={h45}>{props.skills}</h5>
        </div>
      </div>
    </div>
  );
};

export default ModalRequests;
