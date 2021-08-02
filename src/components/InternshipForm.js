import React, { useState, useEffect } from "react";
import MultiSelect from "react-multi-select-component";
import uuid from "react-uuid";
import axios from "axios";
import Auth from "./auth";
import "../styles/Teamupform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Dropdown = (props) => {
  const options = [
    { label: "CSE", value: "CSE" },
    { label: "EE", value: "EE" },
    { label: "MNC", value: "MNC" },
    { label: "MECH", value: "MECH" },
  ];
  const selected = props.selected;
  const setSelected = props.setSelected;

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
  };

  return (
    <span>
      <MultiSelect
        className="select"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        disableSearch={true}
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
      "application/doc",
      "application/docx",
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
        console.log("Inside if ", filesList.length, " ", fileList.length);
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
      console.log("onNewFiles\n");
      console.log(fileList.length);
    }
  };

  const deleteFile = (delId) => {
    console.log(delId);
    //let delIDstr=toString(delId);
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
        <div style={{ display: "flex" }}>
          {fileList.map((file) => {
            return (
              <div key={file.id} style={{ width: "20%" }}>
                <p>{file.name}</p>
                <button
                  type="button"
                  onClick={() => {
                    deleteFile(file.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} size="1x" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const InternshipForm = () => {
  let [fileList, updateFileList] = useState([]);
  let [internshipRole, setInternshipRole] = useState("");
  let [company, setCompany] = useState("");
  let [stipend, setStipend] = useState("");
  const [selected, setSelected] = useState([]); //branches data
  let [date, setDate] = useState();
  let [description, setDescription] = useState("");

  const lengthValidation = (strng, maxlen) => {
    if (strng.length > maxlen) return false;
    return true;
  };

  let maxLen1 = 10;
  let maxLen2 = 20;
  useEffect(() => {
    if (!lengthValidation(internshipRole, maxLen1)) {
      alert(`Only ${maxLen1} characters allowed`);
      setInternshipRole(internshipRole.slice(0, maxLen1));
    }

    if (!lengthValidation(company, maxLen1)) {
      alert(`Only ${maxLen1} characters allowed`);
      setCompany(company.slice(0, maxLen1));
    }

    if (!lengthValidation(stipend, maxLen1)) {
      alert(`Only ${maxLen1} characters allowed`);
      setStipend(stipend.slice(0, maxLen1));
    }

    if (!lengthValidation(description, maxLen2)) {
      alert(`Only ${maxLen2} characters allowed`);
      setDescription(description.slice(0, maxLen2));
    }
  }, [internshipRole, company, stipend, description, maxLen1, maxLen2]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Checking if branches array is empty
    if (selected.length === 0) alert("Atleast 1 Branch need to be selected");
    let branchesSelected = [];
    for (let i = 0; i < selected.length; i++) {
      branchesSelected.push(selected[i].value);
    }
    let data = new FormData();
    data.append("role", internshipRole);
    data.append("company", company);
    data.append("stipend", stipend);
    data.append("branches", branchesSelected);
    data.append("deadline", date);
    data.append("description", description);
    console.log("No of files :", fileList.length);
    for (let i = 0; i < fileList.length; i++) data.append("files", fileList[i]);
    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    let data1 = {
      role: internshipRole,
      company: company,
      stipend: stipend,
      description: description,
      branches: branchesSelected,
      deadline: date,
    };
    axios
      .post("http://localhost:4444/internships/submit", data, {
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
          console.log(res.data);
        }
      });
  };

  return (
    <div>
      <form className="Form" onSubmit={onSubmitHandler}>
        <div className="Title">
          <p>Internship form</p>
        </div>
        <div className="forminput">
          <label htmlFor="intTitle">
            Internship Role <span style={{ color: "red" }}>*</span>{" "}
          </label>
          <input
            className="input"
            type="text"
            id="intTitle"
            name="intTitle"
            value={internshipRole}
            onChange={(e) => {
              setInternshipRole(e.target.value);
            }}
            required
            placeholder="SDE"
          />
        </div>

        <div className="forminput">
          <label htmlFor="company">
            Company <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            required
            placeholder="Amazon"
          />
        </div>

        <div className="forminput">
          <label htmlFor="stipend">Stipend </label>
          <input
            className="input"
            type="text"
            id="stipend"
            name="stipend"
            value={stipend}
            onChange={(e) => {
              setStipend(e.target.value);
            }}
          />
        </div>

        <div className="forminput" style={{ boxSizing: "border-box" }}>
          <label
            htmlFor="branches"
      
          >
            Branches <span style={{ color: "red" }}>*</span>
          </label>
          {/* <div>
                        <div>
                            <input type="checkbox" id="CSE" name="branch1" value="CSE" />
                            <label htmlFor="branch1">CSE</label>
                        </div>

                    </div> */}
          <div style={{ width: "70%", marginTop: "auto", marginRight: "auto" }}>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              style={{ padding: "0px" }}
            />
            {console.log(selected)}
          </div>
        </div>

        <div className="forminput">
          <label htmlFor="deadline">
            Deadline <span style={{ color: "red" }}>*</span>{" "}
          </label>
          <input
            className="input"
            type="datetime-local"
            id="deadline"
            name="deadline"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            
            required
          />
          {console.log(date)}
        </div>

        <div className="forminput">
          <label htmlFor="description">Description </label>
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
              width: "70%",
              height: "4vh",
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
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InternshipForm;
