import React from "react";
import "../Resume.css";

const Resume = ({ formData }) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    website,
    github,
    linkedin,
    college,
    from_clg,
    to_clg,
    degree,
    course,
    project1: { title: title1, link: link1, description: desc1 },
    project2: { title: title2, link: link2, description: desc2 },
    project3: { title: title3, link: link3, description: desc3 },
    experience1: { pos: pos1, org: org1, description: description1 },
    experience2: { pos: pos2, org: org2, description: description2 },
    skills,
    achievements,
  } = formData;

  return (
    <div className="resume left">
      <header className="resume-header">
        <h1>
          {firstname} {lastname}
        </h1>
        <div className="contacts">
          <p>
            <a href={email}>{email}</a>
          </p>

          <p>
            <a href={github}>{github}</a>
          </p>

          {/* <a href={linkedin} >
                LinkedIn
              </a>
            
            
              <a href={website}>
                Website
              </a> */}
        </div>
      </header>
      <section>
        <h2>Education</h2>
        <h3>
          {degree}, {course}
        </h3>
        <p>
          {college}, {from_clg}-{to_clg}
        </p>
      </section>
      {org1 !== "" && (
        <section>
          <h2>Experience</h2>
          <h3>
            {pos1}, {org1}
          </h3>
          <p>{description1}</p>
          {org2 !== "" && (
            <>
              <h3>
                {pos2}, {org2}
              </h3>
              <p>{description2}</p>
            </>
          )}
        </section>
      )}
      {skills.length > 0 && 
        <section>
          <h2>Skills</h2>
          <ul>
            {skills.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </section>
      }
      {title1 !== "" && 
        <section>
          <h2>Projects</h2>
          <h3>
            {title1}
          </h3>
          <p>{desc1}</p>

          {title2 !== "" && 
            <>
              <h3>
                {title2} 
              </h3>
              <p>{desc2}</p>
            </>
          }
          {title3 !== "" && 
            <>
              <h3>
                {title3} 
              </h3>
              <p>{desc3}</p>
            </>
          }
        </section>
      }
      {achievements.length > 0 && (
        <section>
          <h2>Achievements</h2>
          <ul>
            {achievements.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Resume;
