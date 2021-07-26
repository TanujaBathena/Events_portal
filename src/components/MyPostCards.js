import React from "react";

const MyPostCards = (props) => {
  return (
    <div className="card" style={{ height: "200px" }}>
      <div className="card_title">
        {props.title}
      </div>

      <b
        style={{
          marginLeft: "3%",
          marginTop: "2%",
          height: "5%",
          color: "GrayText",
        }}
      >
        Descrption:
      </b>
      <div
        className="card_description"
        style={{
          height: "20%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginTop: "0px",
        }}
      >
          {props.description}
      </div>

      <div
        className="card_footer"
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <button className="btn" type="submit">
          <i className="far fa-edit fa-1x">Edit</i>
        </button>
        <button className="btn" type="submit">
          <i
            className="fas fa-trash-alt fa-1x"
            style={{ fontWeight: "normal", letterSpacing: "1.5px" }}
          >
            Delete
          </i>
        </button>
      </div>
    </div>
  );
};

export default MyPostCards;
