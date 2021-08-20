import { React, useState } from "react";
import "../styles/card.css";
import Modal from "./ModalMyRequests";
import axios from "axios";
import Auth from "./auth";
import address from "./address";

const post_deleted = {
  marginRight: "auto",
  height: "fit-content",
  padding: "3px",
  background: "red",
  color: "white",
  border: "0px",
};
const deleted = {
  height: "fit-content",
  padding: "3px",
  background: "red",
  color: "white",
  border: "0px",
};
const cancel = {
  marginLeft: "auto",
  height: "fit-content",
  padding: "3px",
  background: "green",
  color: "white",
  border: "0px",
};
const MyRequestCards = (props) => {
  const [open, setOpen] = useState(false);
  let status = "";
  if (props.status === 1) {
    status = "Pending";
  } else if (props.status === 0) {
    status = "Rejected";
  } else if (props.status === 2) {
    status = "Accepted";
  }
  const handleDelete = () => {
    const confirm = window.confirm(
      "Are you sure want to delete this request? "
    );
    console.log("confirm consolelog", confirm);
    if (confirm) {
      console.log(props.id);
      const datatobesent = {
        postid: props.ID,
        status: props.status,
        deleted: props.deleted,
      };
      axios
        .post(`http://${address.ip}:4444/Profile/myrequests/delete`, datatobesent, {
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
            window.location.reload();
          }
        });
    }
  };
  const handleCancel = () => {
    const confirm = window.confirm(
      "Are you sure want to cancel this request? "
    );
    console.log("confirm consolelog", confirm);
    if (confirm) {
      console.log(props.id);
      const datatobesent = {
        postid: props.ID,
      };
      console.log("deleting");
      axios
        .post(
          `http://${address.ip}:4444/Profile/myrequests/cancelrequest`,
          datatobesent,
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
  };

  return (
    <div
      className="card"
      style={{ height: "250px", backgroundColor: "#ffffff" }}
    >
      <div style={{ display: "flex" }}>
        {props.deleted && (
          <button style={post_deleted}>This Post is Deleted</button>
        )}
        {props.deleted && (
          <button onClick={handleDelete} style={deleted}>
            Delete
          </button>
        )}

        {!props.deleted && props.status === 1 && (
          <button onClick={handleCancel} style={cancel}>
            Cancel Request
          </button>
        )}
        {!props.deleted && props.status !== 1 && (
          <button onClick={handleDelete} style={cancel}>
            Delete
          </button>
        )}
      </div>

      <div className="card_title" style={{ marginTop: "25px", border: "0px" }}>
        <p style={{ color: "grey" }}>You have requested to team up with </p>
        <b>{props.postedname}</b> <br />
        for the post
        <br />
        <b style={{ fontSize: "medium" }}>"{props.title}"</b>
      </div>

      <div
        className="card_footer"
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: "white", color: "GrayText" }}
        >
          {status}
        </button>

        <button className="btn" type="submit" onClick={() => setOpen(true)}>
          Know more
        </button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={props.title}
          skills={props.skills}
          description={props.postdescription}
          name={props.postedname}
          yourdescription={props.yourdescription}
          ID={props.ID}
          meetdescription={props.meetdescription}
        ></Modal>
      </div>
    </div>
  );
};

export default MyRequestCards;
