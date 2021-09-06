import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import uuid from "react-uuid";
import axios from "axios";
import Auth from "./auth";
import "../styles/Teamupform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import address from "./address";

const Dropdown = (props) => {
  const options = [
    { label: "InfoSec", value: "InfoSec" },
    { label: "ML", value: "ML" },
    { label: "Alpha", value: "Alpha" },
    { label: "Architect", value: "Architect" },
    { label: "E&R", value: "E&R" },
    { label: "Go Myno", value: "Go Myno" },
    { label: "Arts", value: "Arts" },
    { label: "None", value: "None" },
  ];
  const club = props.club;
  const setclub = props.setclub;

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
  };

  return (
    <span>
      <Select
        className="select"
        options={options}
        value={club}
        onChange={setclub}
        styles={style}
      />
    </span>
  );
};

const FilesUploader = (props) => {
  let updateFileList = props.updateFileList;
  let fileList = props.fileList;

  //Validations
  const NoOfFilesValidation = (len) => {
    if (len > 5) {
      const msg = "Only 5 files can be uploaded at a time";
      alert(msg);
      return false;
    }
    return true;
  };

  const wrongFileExtensions = (filesList) => {
    //define message container
    let err = "";
    // list allow mime type
    const types = [
      "image/png",
      "image/jpeg",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    // loop access array
    for (let x = 0; x < filesList.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => filesList[x].type !== type)) {
        // create error message and assign to container
        err += filesList[x].type + " is not a supported format\n";
      }
    }

    if (err !== "") {
      // if message not same old that mean has error
      alert(err);
      return false;
    }
    return true;
  };

  const harmfulFiles = (filesList) => {
    let err = "";
    for (let i = 0; i < filesList.length; i++) {
      let arr = fileList[i].name.split(".");
      if (arr.length > 2) err += filesList[i].name + " is not allowed";
    }
    if (err !== "") {
      alert(err);
      return false;
    }
    return true;
  };

  const checkFileSize = (files) => {
    let size = 5 * 1024 * 1024; //5MB
    let err = "";
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err += files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    if (err !== "") {
      alert(err);
      return false;
    }
    return true;
  };

  const onNewFiles = (filesList) => {
    if (
      NoOfFilesValidation(filesList.length) &&
      wrongFileExtensions(filesList) &&
      harmfulFiles(fileList) &&
      checkFileSize(filesList)
    ) {
      filesList.map((file) => (file.id = uuid()));
      //let newList=fileList;
      if (fileList.length === 0) {
        updateFileList(filesList);
      } else {
        let arr = [];
        for (let i = 0; i < fileList.length; i++) {
          arr.push(fileList[i]);
        }

        for (let i = 0; i < filesList.length; i++) {
          let isThere = false;
          for (let j = 0; j < fileList.length; j++) {
            if (filesList[i].name === fileList[j].name) {
              isThere = true;
              break;
            }
          }
          if (!isThere) {
            arr.push(filesList[i]);
          }
        }
        updateFileList(arr);
      }

      //updateFileList(newList);
    }
  };

  const deleteFile = (delId) => {
    let arr = [];

    for (let ind = 0; ind < fileList.length; ind++) {
      if (fileList[ind].id !== delId) {
        arr.push(fileList[ind]);
      }
    }
    updateFileList(arr);
  };

  return (
    <div
      className="forminput"
      style={{ flexDirection: "column", textAlign: "center" }}
    >
      <label htmlFor="files" style={{ width: "100%", fontSize: "x-large" }}>
        Add files related to the internship :
      </label>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <input
          type="file"
          value=""
          title="&nbsp;"
          id="files"
          name="files"
          multiple={true}
          accept="image/*,.pdf,.doc,.docx"
          onChange={(e) => {
            onNewFiles(Array.from(e.target.files));
          }}
          style={{ height: "25px", margin: "auto", width: "25%" }}
        />
        <div className="filediv">
          {fileList.map((file) => {
            return (
              <div key={file.id} className="filebox">
                <p className="filename">{file.name}</p>
                <button
                  type="button"
                  className="cancel"
                  onClick={() => {
                    deleteFile(file.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Eventedit = (props) => {
  let [fileList, updateFileList] = useState([]);
  let [EventTitle, setEventTitle] = useState("");
  let [venue, setVenue] = useState("");
  //   let [stipend, setStipend] = useState("");
  const [club, setClub] = useState(""); //branches data
  let [deadline, setDeadline] = useState();
  let [description, setDescription] = useState("");
  // let [duration, setDuration] = useState("");
  let history = useHistory();
  const [btn_disable, setbtn_disable] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  const [fromDate, setFromDate] = useState("");
  let [toDate, setToDate] = useState("");

  const lengthValidation = (strng, maxlen) => {
    if (strng.length > maxlen) return false;
    return true;
  };

  let maxLen1 = 50;
  let maxLen2 = 200;
  useEffect(() => {
    if (!lengthValidation(EventTitle, maxLen1)) {
      alert(`Only ${maxLen1} characters allowed`);
      setEventTitle(EventTitle.slice(0, maxLen1));
    }

    if (!lengthValidation(venue, maxLen1)) {
      alert(`Only ${maxLen1} characters allowed`);
      setVenue(venue.slice(0, maxLen1));
    }
    if (!lengthValidation(description, maxLen2)) {
      alert(`Only ${maxLen2} characters allowed`);
      setDescription(description.slice(0, maxLen2));
    }
    let d1 = new Date(fromDate);
    let d2 = new Date(toDate);
    console.log(new Date());
    if (fromDate.length === toDate.length && fromDate.length > 1) {
      console.log("khsvbdzj");
      if (d1 >= d2) {
        alert("To date must be after from date");
        setFromDate("");
        setToDate("");
      }
    }
    // if (fromDate.length !== toDate.length) {
    //   console.log("2nd if");
    if (d1 < new Date()) {
      alert("From date and time must be greater than current date and time");
      setFromDate("");
    }
    if (d2 < new Date()) {
      alert("To date and time must be greater than current date and time");
      setToDate("");
    }
    // }
  }, [EventTitle, venue, description, maxLen1, maxLen2, fromDate, toDate]);
  useEffect(() => {
    // setIsLoading(false);
    // console.log(props.location.postid.id);
    if (props.location.postid !== undefined) {
      axios
        .post(
          `http://${address.ip}:4444/edit/events/getpost`,
          {
            postid: props.location.postid || null,
          },
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
            console.log(res.data);
            if (res.data != null) {
              setEventTitle(res.data.Title);
              setVenue(res.data.Venue);
              //   setToDate(res.data.Todate);
              setDescription(res.data.Description);
              setClub({ label: res.data.Club, value: res.data.Club });
              let d = new Date(res.data.Fromdate).toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
                hour12: false,
              });
              console.log(d);
              let date = "";
              let month = "";
              let year = "";
              let time = "";
              for (let i = 0; i < d.length; i++) {
                if (d[i] === "/") {
                  break;
                }
                date += d[i];
              }
              for (let i = date.length + 1; i < d.length; i++) {
                if (d[i] === "/") {
                  year = d.slice(i + 1, i + 1 + 4);
                  time = d.slice(i + 7, i + 12);
                  break;
                }
                month += d[i];
              }
              console.log(date, month, year, time);
              if (month.length === 1) month = "0" + month;
              if (date.length === 1) date = "0" + date;
              //yyyy-mm-ddThh:mm
              //   setDate(res.data.Deadline.slice(0,16));
              console.log(year + "-" + date + "-" + month + "T" + time);
              setFromDate(year + "-" + date + "-" + month + "T" + time);
              //Todate convertion
              let d1 = new Date(res.data.Todate).toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
                hour12: false,
              });
              console.log(d1);
              let date1 = "";
              let month1 = "";
              let year1 = "";
              let time1 = "";
              for (let i = 0; i < d1.length; i++) {
                if (d1[i] === "/") {
                  break;
                }
                date1 += d1[i];
              }
              for (let i = date1.length + 1; i < d1.length; i++) {
                if (d1[i] === "/") {
                  year1 = d1.slice(i + 1, i + 1 + 4);
                  time1 = d1.slice(i + 7, i + 12);
                  break;
                }
                month1 += d1[i];
              }
              console.log(date1, month1, year1, time1);
              if (month1.length === 1) month1 = "0" + month1;
              if (date1.length === 1) date1 = "0" + date1;
              //yyyy-mm-ddThh:mm
              //   setDate(res.data.Deadline.slice(0,16));
              console.log(year1 + "-" + date1 + "-" + month1 + "T" + time1);
              setToDate(year1 + "-" + date1 + "-" + month1 + "T" + time1);
              if (res.data.DeadlineEvent !== "") {
                let d3 = new Date(res.data.DeadlineEvent).toLocaleString(
                  "en-US",
                  {
                    timeZone: "Asia/Kolkata",
                    hour12: false,
                  }
                );
                console.log(d3);
                let date3 = "";
                let month3 = "";
                let year3 = "";
                let time3 = "";
                for (let i = 0; i < d3.length; i++) {
                  if (d3[i] === "/") {
                    break;
                  }
                  date3 += d3[i];
                }
                for (let i = date3.length + 1; i < d3.length; i++) {
                  if (d3[i] === "/") {
                    year3 = d3.slice(i + 1, i + 1 + 4);
                    time3 = d3.slice(i + 7, i + 12);
                    break;
                  }
                  month3 += d3[i];
                }
                console.log(date3, month3, year3, time3);
                if (month3.length === 1) month3 = "0" + month3;
                if (date3.length === 1) date3 = "0" + date3;
                //yyyy-mm-ddThh:mm
                //   setDate(res.data.Deadline.slice(0,16));
                console.log(year3 + "-" + date3 + "-" + month3 + "T" + time3);
                setDeadline(year3 + "-" + date3 + "-" + month3 + "T" + time3);
              }
              setIsLoading(true);
            }
          }
        });
    } else {
      alert(
        "you will be redirected to My Posts and the form will not be submitted"
      );
      history.push("/myposts");
    }
    // eslint-disable-next-line
  }, []);

  const onSubmitHandler = async (e) => {
    setbtn_disable(true);
    setIsLoading(false);
    e.preventDefault();
    // Checking if branches array is empty
    // if (selected.length === 0) alert("Atleast 1 Branch need to be selected");
    // let branchesSelected = [];
    // for (let i = 0; i < selected.length; i++) {
    //   branchesSelected.push(selected[i].value);
    // }
    console.log(deadline);
    let data = new FormData();
    data.append("postid", props.location.postid.id);
    data.append("eventtitle", EventTitle);
    data.append("venue", venue);
    data.append("fromdate", fromDate);
    data.append("todate", toDate);
    data.append("club", club.value);
    data.append("deadline", deadline);
    data.append("description", description);
    for (let i = 0; i < fileList.length; i++) data.append("files", fileList[i]);
    axios
      .post(`http://${address.ip}:4444/edit/events/submit`, data, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data !== "notloggedin") {
          Auth.login();
          history.push("/myposts");
        } else {
          setbtn_disable(false);
        }
      });
  };

  if (isLoading) {
    return (
      <div>
        <form className="Form" onSubmit={onSubmitHandler}>
          <div className="Title">
            <p>Event Form</p>
            <p style={{ fontSize: "10px", color: "red" }}>
              Note: Please reupload the files again
            </p>
          </div>
          <div className="forminput">
            <label htmlFor="intTitle">
              Event Title <span style={{ color: "red" }}>*</span>{" "}
            </label>
            <input
              className="input"
              type="text"
              id="intTitle"
              name="intTitle"
              value={EventTitle}
              onChange={(e) => {
                setEventTitle(e.target.value);
              }}
              required
              placeholder="Coding challenge"
            />
          </div>

          <div className="forminput">
            <label htmlFor="venue">
              Venue <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="input"
              type="text"
              id="venue"
              name="venue"
              value={venue}
              onChange={(e) => {
                setVenue(e.target.value);
              }}
              required
              placeholder="LH1"
            />
          </div>

          <div className="forminput" style={{ boxSizing: "border-box" }}>
            <label htmlFor="branches">Club</label>
            <div
              style={{ width: "70%", marginTop: "auto", marginRight: "auto" }}
            >
              <Dropdown
                club={club}
                setclub={setClub}
                style={{ padding: "0px" }}
              />
            </div>
          </div>

          <div className="forminput">
            <label htmlFor="duration">
              {" "}
              <u>Event Duration </u>
            </label>
            {/* <input
              className="input"
              type="text"
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            /> */}
            {/* </div> */}

            {/* <div className="forminput"> */}
            <label htmlFor="fromDate">
              From: <span style={{ color: "red" }}>*</span>{" "}
            </label>
            <input
              className="input"
              type="datetime-local"
              id="fromDate"
              name="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
            {/* {console.log(date)} */}
            {/* </div> */}
            {/* <div className="forminput"> */}
            <label htmlFor="toDate">
              To: <span style={{ color: "red" }}>*</span>{" "}
            </label>
            <input
              className="input"
              type="datetime-local"
              id="toDate"
              name="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>
          <div className="forminput">
            <label htmlFor="deadline">Deadline:</label>
            <input
              className="input"
              type="datetime-local"
              id="deadline"
              name="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="forminput">
            <label htmlFor="description">Event Description </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              style={{
                width: "100%",
                height: "50",
                resize: "none",
                marginRight: "auto",
              }}
              placeholder="Any additional details and Links here"
            ></textarea>
          </div>

          <FilesUploader
            fileList={fileList}
            updateFileList={updateFileList}
            style={{ display: "flex" }}
          />
          <div className="btndiv">
            <button className="btn" type="submit" disabled={btn_disable}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Eventedit;
