import { React, useState } from "react";
import "../styles/card.css";
import Modal from "./ModalReceivedRequests";

const ReceivedRequestsCards = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card" style={{ height: "150px" }}>
      <div className="card_title" v style={{ border: "0px" }}>
        {props.name} is interested to team up with you in your post named{" "}
        {props.title}
      </div>

      <div
        className="card_footer"
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <button
          className="btn"
          style={{
            marginLeft: "auto",
          }}
          onClick={() => setOpen(true)}
        >
          View details
        </button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={props.title}
          skills={props.skills}
          description={props.description}
          name={props.name}
          ID={props.ID}
          requesteduserid={props.requesteduserid}
          post_mong_id={props.post_mong_id}
          mydescription={props.mydescription}
          status={props.status}
          deleted={props.deleted}
        ></Modal>
      </div>
    </div>
  );
};

export default ReceivedRequestsCards;
