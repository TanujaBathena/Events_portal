import React from "react";

const MyPostCards = () => {
  return (
    <div className="card" style={{ height: "300px" }}>
      <div className="card_title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
      </div>

      <b style={{ marginTop: "2%", height: "10%" }}>Descrption:</b>
      <div className="card_description" style={{ height: "205" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nesciunt sunt labore, accusantium dolores ipsam quo alias debitis!
        Impedit tempore perferendis adipisci id velit nostrum nam commodi ad
        quas itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugit reprehenderit facilis quibusdam illum dolore ipsam ad fugiat,
        beatae repellat ea nam, odit magnam animi dignissimos impedit reiciendis
        saepe modi labore.
      </div>

      <div
        className="card_footer"
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <button
          className="btn"
          type="submit"
          style={{
            boxSizing: "border-box",
            width: "100px",
            height: "50px",
            padding: "5px",
            alignSelf: "flex-end",
            marginRight: "3%",
            marginBottom: "2%",
            fontSize: "medium",
            borderRadius: "5px",
          }}
        >
          <i className="far fa-edit fa-1x">Edit</i>
        </button>
        <button
          className="btn"
          type="submit"
          style={{
            boxSizing: "border-box",
            width: "100px",
            height: "50px",
            padding: "5px",
            alignSelf: "flex-end",
            marginRight: "3%",
            marginBottom: "2%",
            fontSize: "medium",
            borderRadius: "5px",
          }}
        >
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
