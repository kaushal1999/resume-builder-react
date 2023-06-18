import React, { Component, useState } from "react";
import "../App.css";
import Profile from "./Profile";
import Education from "./Education";
import Experiences from "./Experiences";
import Extras from "./Extras";
import Projects from "./Projects";


function App() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    facebook: "",
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
    interests:[],
  });
    
const titles=["Personal Details","Education Details","Projects Developed","Experiences","Extras"]  

  const body = () => {
    if (page === 1) return <Profile></Profile>
    else if (page === 2) return <Education></Education>
    else if (page === 3) return <Projects></Projects>
    else if(page===4) return <Experiences></Experiences>
    else return <Extras></Extras>
  }

    return (
      <div>
        <div className="header">
          <h4>Resume Builder</h4>
        </div>

        <div className="page-title">{titles[page - 1]}</div>
        {body()}
        <div>
          <button class="btn" onClick={()=>setPage(page-1)} disabled={page === 1 ? true : false}>
            <i class="fa fa-arrow-left"></i>Back
          </button>
          <button class="btn" onClick={()=>setPage(page+1)} disabled={page === 5 ? true : false}>
            Next
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <div>
          {page===5?  <button class="btn" onClick={()=>setPage(page+1)}>
            Download
            <i class="fa fa-arrow-down"></i>
          </button>:<></>}
        </div>
        <p className="text-center">page {page}</p>
      </div>
    );
  }


export default App;
