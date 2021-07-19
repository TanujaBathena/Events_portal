import React, { useState, useEffect, useRef } from "react";
import MultiSelect from "react-multi-select-component";
import uuid from "react-uuid";
import axios from "axios";
import "./form.css";

import "./internshipForm.css";
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
      "image/gif",
      "application/pdf",
      "application/doc",
      "application/docx",
    ];
    // loop access array
    for (var x = 0; x < filesList.length; x++) {
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
      className="attribute"
      style={{ flexDirection: "column", textAlign: "center" }}
    >
      <label htmlFor="files" style={{ width: "100%", fontSize: "x-large" }}>
        Add files related to the internship :
      </label>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <input
          type="file"
          title=" "
          id="files"
          name="files"
          multiple={true}
          accept="image/*,.pdf,.doc,.docx"
          onChange={(e) => {
            onNewFiles(Array.from(e.target.files));
            console.log("Hiiiiii");
          }}
          style={{ height: "25px", margin: "auto", width: "25%" }}
        />
        <div style={{ display: "flex" }}>
          {fileList.map((file) => {
            {
              console.log("Rerendering");
              console.log(file.name);
            }

            return (
              <div key={file.id} style={{ width: "20%" }}>
                <p>{file.name}</p>
                <button
                  type="button"
                  onClick={() => {
                    deleteFile(file.id);
                  }}
                >
                  Delete
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
  let [internshipTitle, setInternshipTitle] = useState("");
  let [company, setCompany] = useState("");
  let [stipend, setStipend] = useState("");
  const [selected, setSelected] = useState([]); //branches data
  let [date, setDate] = useState();
  let [description, setDescription] = useState("");
  let [links, setLinks] = useState([]);
  let [uploadPercentage, setUploadPercentage] = useState(0);

  const lengthValidation = (strng, maxlen) => {
    if (strng.length > maxlen) return false;
    return true;
  };

  useEffect(() => {
    if (!lengthValidation(internshipTitle, 5)) {
      alert("Only 5 characters allowed");
      setInternshipTitle(internshipTitle.slice(0, -1));
    }

    if (!lengthValidation(company, 5)) {
      alert("Only 5 characters allowed");
      setCompany(company.slice(0, -2));
    }

    if (!lengthValidation(stipend, 5)) {
      alert("Only 5 characters allowed");
      setStipend(stipend.slice(0, -1));
    }

    if (!lengthValidation(description, 5)) {
      alert("Only 5 characters allowed");
      setDescription(description.slice(0, -1));
    }
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("files", fileList[0]);

    try {
      const res = await axios.post("http://localhost:4444/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );
          //Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      });
      const { filename, filePath } = res.data;
      console.log(filename);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h2 className="mainHead">Internship Form</h2>
      <form className="form" onSubmit={onSubmitHandler} className="form">
        <div className="attribute">
          <label htmlFor="intTitle">Internship Title </label>
          <input
            type="text"
            id="intTitle"
            name="intTitle"
            value={internshipTitle}
            onChange={(e) => {
              // if(lengthValidation(internshipTitle,5)){
              //     changeInternshipTitle(e.target.value);
              //     console.log(internshipTitle);
              // }
              // else{
              //     console.log(internshipTitle);
              //     alert('Only 30 characters allowed');
              //     changeInternshipTitle(e.target.value.slice(0,-1));
              //     console.log(internshipTitle);
              // }
              setInternshipTitle(e.target.value);
            }}
            style={{ width: "70%", height: "4vh" }}
          />
        </div>

        <div className="attribute">
          <label htmlFor="company">Company </label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            style={{ width: "70%", height: "4vh" }}
          />
        </div>

        <div className="attribute">
          <label htmlFor="stipend">Stipend </label>
          <input
            type="text"
            id="stipend"
            name="stipend"
            value={stipend}
            onChange={(e) => {
              setStipend(e.target.value);
            }}
            style={{ width: "70%", height: "4vh" }}
          />
        </div>

        <div className="attribute" style={{ boxSizing: "border-box" }}>
          <label
            htmlFor="branches"
            style={{ width: "20%", height: "4vh", marginTop: "3%" }}
          >
            Branches{" "}
          </label>
          {/* <div>
                        <div>
                            <input type="checkbox" id="CSE" name="branch1" value="CSE" />
                            <label htmlFor="branch1">CSE</label>
                        </div>

                    </div> */}
          <div style={{ width: "70%", marginTop: "auto" }}>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              style={{ padding: "0px" }}
            />
            {console.log(selected)}
          </div>
        </div>

        <div className="attribute">
          <label htmlFor="deadline">Deadline </label>
          <input
            type="datetime-local"
            id="deadline"
            name="deadline"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "70%", height: "4vh" }}
          />
          {console.log(date)}
        </div>

        <div className="attribute">
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
            style={{ width: "70%", height: "4vh" }}
          ></textarea>
        </div>

        <FilesUploader
          fileList={fileList}
          updateFileList={updateFileList}
          style={{ display: "flex" }}
        />

        {/* <div className="attribute">
                    <label htmlFor="links">Links </label>

                    <div id="links" style={{display:flex,}}>
                        <input type="url" name="url1" id="url1" placeholder="https://example.com" pattern="https://.*" size="30" required />
                        <input type="url" name="url2" id="url2" placeholder="https://example.com" pattern="https://.*" size="30"  />
                    </div>

                </div> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InternshipForm;
