import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../styles/Teamupform.css";
const Dropdown = (props) => {
  const options = [
    { value: "Web", label: "Web" },
    { value: "Android", label: "Android" },
    { value: "ML", label: "ML" },
    { value: "AI", label: "AI" },
    { value: "DL", label: "DL" },
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      zIndex: -1,
      boxSizing: "border-box",
      boxShadow: "none",
      "&:Focus": {
        border: "3px solid #ffd480",
      },
    }),
  };

  return (
    <div className="forminput">
      <label>
        Tag<span style={{ color: "red" }}>*</span>
      </label>
      <Select className="select" options={options} styles={style} />
    </div>
  );
};

const Teamup_form = () => {
  const [Title, settitle] = useState("");
  const [skill, setskill] = useState("");
  const [Description, setDescription] = useState("");

  const HandleInputs = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (Title.length > 5) {
      alert("Title cannot be more than 5 characters");
      settitle(Title.slice(0, -1));
    }
    if (skill.length > 5) {
      alert("skill cannot be more than 5 characters");
      setskill(skill.slice(0, -1));
    }
    if (Description.length > 5) {
      alert("Description cannot be more than 5 characters");
      setDescription(Description.slice(0, -1));
    }
  });

  return (
    <>
      <form className="Form">
        <div className="Title">
          <p>TeamUp Post Form</p>
        </div>
        <div className="forminput">
          <label>
            Requirement<span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            required
            id="name"
            placeholder="Looking fro WEB developer"
            value={Title}
            onChange={(e) => settitle(e.target.value)}
          ></input>
        </div>
        <div className="forminput">
          <label>
            Skill<span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="input"
            type="text"
            required
            id="Skill"
            placeholder="Reactjs,kotlin"
            value={skill}
            onChange={(e) => setskill(e.target.value)}
          ></input>
        </div>
        <Dropdown />
        <div className="forminput">
          <label>Description</label>
          <textarea
            rows="5"
            cols="50"
            placeholder="Enter teamup Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="btndiv">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Teamup_form;
