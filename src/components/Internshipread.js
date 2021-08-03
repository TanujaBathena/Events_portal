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
        if (res.data !== "notloggedin") {
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
  if (isLoading) return <Loader />;
  else {
    return (
      <div className="containerr">
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
          <p className="matter">{branches}</p>
        </div>
        {/* <div className="contentr">
          <p className="heading">Files</p>
          <p className="matter">{files}</p>
        </div> */}
        <div className="contentr">
          <p className="heading">Files</p>
          {files.map((File) => (
            <p className="matter" key={File._id}>
              {File.fileName}
            </p>
          ))}
        </div>

        <div className="contentr"></div>
        <div className="contentr"></div>
        <div className="contentr"></div>
        <div className="contentr"></div>
      </div>
    );
  }
};

export default Internshipread;
