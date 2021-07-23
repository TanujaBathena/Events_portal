import React from "react";
const modal_styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "#ffffff",
  transform: "translate(-50%,-50%",
  width: "75%",
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
};

const Modal = (props) => {
  if (!props.isOpen) return null;
  return (
    <div style={overlay}>
      <div className="modal" style={modal_styles}>
        <div style={header}>
          <div>{props.children}</div>
          <button onClick={props.onClose} style={{ marginLeft: "auto" }}>
            Close
          </button>
        </div>
        <div></div>
        <div style={{ alignSelf: "flex-end", margin: "auto" }}>
          <button className="btn" type="submit">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
