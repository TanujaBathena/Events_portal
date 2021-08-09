import { React, useState, useEffect } from "react";
import "../styles/readmore.css";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";

const Internshipread = (props) => {
  // let [result, setResult] = useState({
  //   _id: "",
  //   Name: "",
  //   User_Id: "",
  //   Role: "",
  //   Company: "",
  //   Duration: "",
  //   Branches: "",
  //   Stipend: "",
  //   Deadline: "",
  //   Description: "",
  //   Files: [],
  // });
  //eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [branches, setBranches] = useState("");
  const [stipend, setStipend] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState("");
  const [deadline, setDeadline] = useState("");
  //eslint-disable-next-line
  const [id, setId] = useState("");
  //eslint-disable-next-line
  const [userid, setUserId] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    const datatobesent = {
      postid: props.match.params.id,
    };
    axios
      .post("http://localhost:4444/internships/readmore", datatobesent, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data === "post deleted") {
          Auth.login();
          console.log(res.data);
          // result = { result: res.data };
          // result = res.data;
          setError(true);
          setIsLoading(false);
        }
        else if (res.data === 404) {
            Auth.login();
            console.log(res.data);
            // result = { result: res.data };
            // result = res.data;
            setError(true);
            setIsLoading(false);
          }
        else if (res.data !== "notloggedin") {
          Auth.login();
          console.log(res.data);
          // result = { result: res.data };
          // result = res.data;
          setName(res.data.Name);
          setRole(res.data.Role);
          setCompany(res.data.Company);
          setDuration(res.data.Duration);
          setDescription(res.data.Description);
          setStipend(res.data.Stipend);
          setDeadline(res.data.Deadline);
          setFiles(res.data.Files);
          setBranches(res.data.Branches);
          setId(res.data._id);
          setUserId(res.data.User_Id);
          setIsLoading(false);
        }
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
            <b>Internship at {company}</b>
          </h1>
          <div className="contentr">
            <p className="heading">Posted By</p>
            <p className="matter">{name}</p>
          </div>
          <div className="contentr">
            <p className="heading">Role</p>
            <p className="matter">{role}</p>
          </div>
          <div className="contentr">
            <p className="heading">Company</p>
            <p className="matter">{company}</p>
          </div>
          <div className="contentr">
            <p className="heading">Duration</p>
            <p className="matter">{duration}</p>
          </div>
          <div className="contentr">
            <p className="heading">Stipend</p>
            <p className="matter">{stipend}</p>
          </div>
          <div className="contentr">
            <p className="heading">Description</p>
            <p className="matter">{description}</p>
          </div>
          <div className="contentr">
            <p className="heading">Deadline</p>
            <p className="matter">{deadline}</p>
          </div>
          <div className="contentr">
            <p className="heading">Branches</p>
            <p className="matter">
              {branches.map((branch) => {
                return <span key={branch}>{branch} </span>;
              })}
            </p>
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
      return (
        <h1 style={{ marginLeft: "30%", marginTop: "40vh" }}>
          Post you are trying to read is deleted
        </h1>
      );
    }
  }
};

export default Internshipread;
