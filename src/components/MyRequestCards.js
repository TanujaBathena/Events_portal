import {React,useState} from "react";
import "../styles/card.css";
import Modal from "./ModalRequests"
const MyRequestCards = (props) => {
   const [open, setOpen] = useState(false);
   let status="";
   if (props.status===1) {
       status="Pending"
   }
   else if (props.status===0){
        status="Rejected"
   }
   else if(props.status===2){
     status = "Accepted"
   }
  return (
    <div
      className="card"
      style={{ height: "150px", backgroundColor: "#ffffff" }}
    >
      <div className="card_title" style={{marginTop:"25px",border:"0px"}}>
        <p style={{color:"grey"}}>You have requested to team up with </p><b>{props.postedname}</b>
      </div>
      {/* <b style={{ marginLeft: "3%", marginTop: "2%", height: "10%" }}>
        Description:
      </b> */}
      {/* <div
        className="card_description"
        style={{
          height: "20%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginTop: "0px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nesciunt sunt labore, accusantium dolores ipsam quo alias debitis!
        Impedit tempore perferendis adipisci id velit nostrum nam commodi ad
        quas itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugit reprehenderit facilis quibusdam illum dolore ipsam ad fugiat,
        beatae repellat ea nam, odit magnam animi dignissimos impedit reiciendis
        saepe modi labore.
      </div> */}

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
      ></Modal>
      </div>
    </div>
  );
};

export default MyRequestCards;
