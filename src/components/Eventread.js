import { React, useState, useEffect } from "react";
import ReactTextFormat from "react-text-format";
import "../styles/readmore.css";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
import Notfound from "./Notfound";
import address from "./address";

const Eventsread = (props) => {
  // let [result, setResult] = useState({
  //   _id: "",
  //   Name: "",
  //   User_Id: "",
  //   Title: "",
  //   Venue: "",
  //   Fromdate: "",
  //   Branches: "",
  //   Club: "",
  //   Deadline: "",
  //   Description: "",
  //   Files: [],
  // });
  //eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Venue, setVenue] = useState("");

  const [Club, setClub] = useState("");
  const [Fromdate, setFromdate] = useState("");
  const [Todate, setTodate] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState("");
  const [deadline, setDeadline] = useState("Not Specified");
  //eslint-disable-next-line
  const [id, setId] = useState("");
  //eslint-disable-next-line
  const [userid, setUserId] = useState("");
  const [error, setError] = useState(false);
  const [notfound, setnotfound] = useState(false);
  useEffect(() => {
    const datatobesent = {
      postid: props.match.params.id,
    };
    axios
      .post(`http://${address.ip}:4444/events/readmore`, datatobesent, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data === "post deleted") {
          Auth.login();
          console.log(res.data);
          // result = { result: res.data };
          // result = res.data;
          setError(true);
          setIsLoading(false);
        } else if (res.data !== "notloggedin") {
          Auth.login();
          console.log(res.data);
          // result = { result: res.data };
          // result = res.data;
          setName(res.data.Name);
          setTitle(res.data.Title);
          setVenue(res.data.Venue);
          setFromdate(res.data.Fromdate);
          setDescription(res.data.Description);
          setDeadline("Not Specified");
          setClub(res.data.Club);
          if (res.data.club === "undefined") {
            setClub("NONE");
          }
          let fromdate = new Date(res.data.Fromdate).toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          });
          let todate = new Date(res.data.Todate).toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          });
          if (
            res.data.DeadlineEvent !== undefined &&
            res.data.DeadlineEvent !== null
          ) {
            let deadline = new Date(res.data.DeadlineEvent).toLocaleString(
              "en-US",
              {
                timeZone: "Asia/Kolkata",
              }
            );
            setDeadline(deadline);
          }
          setFromdate(fromdate);
          setTodate(todate);
          setFiles(res.data.Files);
          setId(res.data._id);
          setUserId(res.data.User_Id);
          setIsLoading(false);
        }
      })
      .catch((res) => {
        Auth.login();
        console.log(res);
        setnotfound(true);
        setError(true);
        setIsLoading(false);
      });
    //eslint-disable-next-line
  }, []);

  function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
      view[i] = buf[i];
    }
    return ab;
  }
  function Download(arrayBuffer, type) {
    var blob = new Blob([arrayBuffer], { type: type });
    var url = URL.createObjectURL(blob);
    //var image = new Image();
    //image.src = url;
    //w.document.write(image.outerHTML);
    window.open(url);
  }

  // function arrayBufferToBase64(buffer) {
  //   var binary = "";
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach((b) => (binary += String.fromCharCode(b)));
  //   return window.btoa(binary);
  // }

  let openfile = (buffer, type) => {
    console.log(buffer, type);
    let arrbuf = toArrayBuffer(buffer.data);
    Download(arrbuf, type);

    // var image = new Image();
    // image.src = "data:image/jpg;base64," + ur;
    // var w = window.open("", "_blank");
    // w.document.write(image.outerHTML);
    // window.open(ur);
  };

  if (isLoading) return <Loader />;
  else {
    if (!error) {
      return (
        <div className="containerr">
          <h1 style={{ margin: "auto" }}>
            <b> {Title}</b>
          </h1>
          <div className="contentr">
            <p className="heading">Posted By</p>
            <p className="matter">{name}</p>
          </div>
          <div className="contentr">
            <p className="heading">Club</p>
            <p className="matter">{Club}</p>
          </div>
          <div className="contentr">
            <p className="heading">Venue</p>
            <p className="matter">{Venue}</p>
          </div>
          <div className="contentr">
            <p className="heading">Event Timings(mm/dd/yyyy)</p>
            <p className="matter">
              {Fromdate} <b>to</b> {Todate}
            </p>
          </div>
          <div className="contentr">
            <p className="heading">Description</p>

            <ReactTextFormat className="matter" linkTarget="_blank">
              {description}
            </ReactTextFormat>
          </div>
          <div className="contentr">
            <p className="heading">Event Registration Deadline(mm/dd/yyyy)</p>
            <p className="matter">{deadline}</p>
          </div>

          {/* <div className="contentr">
          <p className="heading">Files</p>
          <p className="matter">{files}</p>
        </div> */}
          <div className="contentr">
            <p className="heading">Files</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              {files.map((File) => (
                <p
                  className="filel"
                  key={File._id}
                  onClick={() => {
                    openfile(File.data, File.contentType);
                  }}
                >
                  {File.fileName}
                </p>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      if (notfound) return <Notfound />;
      return (
        <h1 style={{ marginLeft: "30%", marginTop: "40vh" }}>
          Post you are trying to read is deleted
        </h1>
      );
    }
  }
};

export default Eventsread;
