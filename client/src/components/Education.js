import React from "react";

export default function Education({ formData, setFormData }) {
  
  function handleChange(e) {
    const inputName = e.target.name;
    const val = e.target.value;
    setFormData({ ...formData, [inputName]: val });
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            
            type="text"
            onChange={handleChange}
            value={formData.college}
            name="college"
            className="form-control"
            placeholder="College"
          />
        </div>
        <div className="col position-relative">
          <span class="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
            from
          </span>
          <input
            type="date"
            className="form-control"
            onChange={handleChange}
            value={formData.from_clg}
            name="from_clg"
          ></input>
        </div>
        <div className="col position-relative">
          <span class="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
            to
          </span>

          <input
            onChange={handleChange}
            type="date"
            className="form-control"
            value={formData.to_clg}
            name="to_clg"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Degree"
            onChange={handleChange}
            value={formData.degree}
            name="degree"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            onChange={handleChange}
            value={formData.course}
            name="course"
          />
        </div>
      </div>
    </div>
  );
}
