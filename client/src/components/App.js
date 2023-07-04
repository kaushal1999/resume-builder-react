import React, { Component, useState } from "react";
import "../App.css";
import Profile from "./Profile";
import Education from "./Education";
import Experiences from "./Experiences";
import Extras from "./Extras";
import Projects from "./Projects";
import axios from "axios";

function App() {

  const [page, setPage] = useState(1)
  
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    website:"",
    github: "",
    linkedin: "",
    facebook: "",
    twitter:"",
    instagram: "",
    college: "",
    from_clg: "",
    to_clg: "",
    degree: "",
    course: "",
    project1: { title: "", link: "", description: "" },
    project2: { title: "", link: "", description: "" },
    project3: { title: "", link: "", description: "" },
    experience1: { org: "", pos: "", duration: "" },
    experience2: { org: "", pos: "", duration: "" },
    skills: [],
    interests: [],
  });

  const postUrl = "/create-pdf";

  const titles = [
    "Personal Details",
    "Education Details",
    "Projects Developed",
    "Experiences",
    "Extras",
  ];

  async function createAndDwonloadPdf() {
    const res = await axios.post(postUrl, formData);
  }

  const body = () => {
    if (page === 1) return <Profile  formData={formData} setFormData={setFormData}></Profile>;
    else if (page === 2) return (
      <Education formData={formData} setFormData={setFormData}></Education>
    );
    else if (page === 3) return <Projects formData={formData} setFormData={setFormData}></Projects>;
    else if (page === 4) return (
      <Experiences formData={formData} setFormData={setFormData}></Experiences>
    );
    else return <Extras formData={formData} setFormData={setFormData}></Extras>;
  };

  return (
    <div>
      <div className="header">
        <h4>Resume Builder</h4>
      </div>

      <div className="page-title">{titles[page - 1]}</div>
      {body()}
      <div className="fixed">
        <button
          class="btn"
          onClick={()=>setPage(page-1)}
          disabled={page === 1 ? true : false}
        >
          <i class="fa fa-arrow-left"></i>Back
        </button>
        <button
          onClick={() => setPage(page +1)}
          class="btn"
          disabled={page === 5 ? true : false}
        >
          Next
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
      <div>
        {page === 5 ? (
          <button class="btn">
            Download
            <i class="fa fa-arrow-down"></i>
          </button>
        ) : (
          <></>
        )}
      </div>
      <p className="text-center">page {page}</p>
    </div>
  );
}

export default App;
