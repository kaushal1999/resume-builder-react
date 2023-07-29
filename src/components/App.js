import React, { Component, useRef, useState } from "react";
import "../App.css";
import Profile from "./Profile";
import Education from "./Education";
import Experiences from "./Experiences";
import Extras from "./Extras";
import Projects from "./Projects";
import Resume from "./Resume";
import useLocalStorage from "../hooks/useLocalStorage";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useReactToPrint } from "react-to-print";
import JsPDF from 'jspdf'
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
  const [page, setPage] = useState(1);
  const resumeTemplateRef = useRef(null);
  const [formData, setFormData] = useLocalStorage();

  const handlePrint = useReactToPrint({
    content: () => resumeTemplateRef.current,
  });
  
  
  
  
  
  
  
 

  const titles = [
    "Personal Details",
    "Education Details",
    "Projects Developed",
    "Experiences",
    "Extras",
    "Preview",
  ];

  const body = () => {
    if (page === 1)
      return <Profile formData={formData} setFormData={setFormData}></Profile>;
    else if (page === 2)
      return (
        <Education formData={formData} setFormData={setFormData}></Education>
      );
    else if (page === 3)
      return (
        <Projects formData={formData} setFormData={setFormData}></Projects>
      );
    else if (page === 4)
      return (
        <Experiences
          formData={formData}
          setFormData={setFormData}
        ></Experiences>
      );
    else if (page === 5)
      return <Extras formData={formData} setFormData={setFormData}></Extras>;
    else
      return (
        <div className="resume-container" id="resume" ref={resumeTemplateRef}>
          <Resume formData={formData}></Resume>
        </div>
      );
  };

  return (
    <div className="App">
      <div className="header">
        <h4>Resume Builder</h4>
        <div className="page-title">{titles[page - 1]}</div>
      </div>
      <div className="form">{body()}</div>
      <div className="footer">
        <div className="btns">
          <button
            className="btn"
            onClick={() => setPage(page - 1)}
            disabled={page === 1 ? true : false}
          >
            <i className="fa fa-arrow-left"></i> Back
          </button>
          <button
            onClick={page !== 6 ? () => setPage(page + 1) : () => handlePrint()}
            className="btn"
          >
            {page === 5 ? "Preview " : page === 6 ? "Download " : "Next "}

            {page === 6 ? (
              <i className="fa fa-arrow-down"></i>
            ) : (
              <i className="fa fa-arrow-right"></i>
            )}
          </button>
        </div>

        <p>page {page}</p>
      </div>
    </div>
  );
}

export default App;
