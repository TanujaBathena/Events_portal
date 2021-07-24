import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../styles/Teamupform.css";
import axios from "axios";

//multiselecect
//teamup submit redirect and disable
const Dropdown = (props) => {
  let tag_value = props.tag;
  let settag = props.func;
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
      <Select
        className="select"
        options={options}
        value={tag_value}
        onChange={settag}
        styles={style}
      />
    </div>
  );
};

const Teamup_form = () => {
  const [Title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [Tag, settag] = useState("");
  const [Description, setDescription] = useState("");

  // const HandleInputs = (event) => {
  //   event.preventDefault();
  // };

  const HandleInputs = async (event) => {
    let url = "http://localhost:4444/teamup/submit";
    event.preventDefault();
    if (Tag === "") {
      alert("Tag field should not be empty");
    } else {
      const datatobesent = {
        title: Title,
        skill: skill,
        tag: Tag.value,
        description: Description,
      };
      const res = await axios.post(url, datatobesent, {
        withCredentials: true,
      });
      console.log(res);
    }
  };

  useEffect(() => {
    if (Title.length > 50) {
      alert("Title cannot be more than 5 characters");
      setTitle(Title.slice(0, 50));
    }
    if (skill.length > 50) {
      alert("skill cannot be more than 5 characters");
      setSkill(skill.slice(0, 50));
    }
    if (Description.length > 300) {
      alert("Description cannot be more than 5 characters");
      setDescription(Description.slice(0, 300));
    }
  }, [Title]);

  return (
    <div>
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
            placeholder="Looking for WEB developer"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setSkill(e.target.value)}
          ></input>
        </div>
        <Dropdown tag={Tag} func={settag} />
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
          <button className="btn" type="submit" onClick={HandleInputs}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Teamup_form;
