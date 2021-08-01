import { React } from "react";
import axios from "axios";
import Auth from "./auth";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const MyPostCards = (props) => {
  // const [deleted,setdeleted]= useState(false);
  let post = props.id;

  const handleDelete = () => {
    const confirm = window.confirm(
      "By deleting this post, all the received request for this post will be deleted,except the accepted ones. Are you sure want to delete? "
    );
    console.log("confirm consolelog", confirm);
    if (confirm) {
      console.log(props.id);
      const datatobesent = {
        postid: props.id,
      };
      console.log("deleting");
      axios
        .post("http://localhost:4444/Profile/myposts/delete", datatobesent, {
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
            console.log(res.data);
            props.delfunc(!props.deleted);
          }
        });
    }
  };

  return (
    <div className="card" style={{ height: "200px" }}>
      <div className="card_title">{props.title}</div>

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
        <Link
          to={{
            pathname: "/Teamupformedit",
            postid: { id: post, PostTitle: props.title },
          }}
          className="btn"
        >
          <button
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "0px",
              color: "white",
            }}
            type="submit"
          >
            <i className="far fa-edit fa-1x">Edit</i>
          </button>
        </Link>
        <button className="btn" type="submit">
          <i
            className="fas fa-trash-alt fa-1x"
            style={{ fontWeight: "normal", letterSpacing: "1.5px" }}
            onClick={() => handleDelete()}
          >
            Delete
          </i>
        </button>
      </div>
    </div>
  );
};

export default MyPostCards;
