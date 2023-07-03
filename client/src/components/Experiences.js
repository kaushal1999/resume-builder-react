import React from 'react'

function Experience({ e_num }) {
  
  function handleChange(e) {
    const inputName = e.target.name;
    const val = e.target.value;
    setFormData({ ...formData, [inputName]: val });
  }
    return (
      <div>
        <p>Experience {e_num}</p>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="organization"
              aria-label="Last name"
            ></input>
          </div>
          <div className="col ">
            <input
              type="text"
              className="form-control"
              placeholder="Position"
              aria-label="Last name"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Duration"
              aria-label="Last name"
            ></input>
          </div>
        </div>
      </div>
    );
}
export default function Experiences() {
  return (
    <div>
      <Experience e_num="1"></Experience>
      <Experience e_num="2"></Experience>
    </div>
  );
}
