import React from "react";

export default function Education() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="College"
            aria-label="First name"
          />
        </div>
        <div className="col position-relative">
          <span class="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
            from
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="Github"
            aria-label="Last name"
          ></input>
        </div>
        <div className="col position-relative">
          <span class="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
            to
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="Github"
            aria-label="Last name"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Degree"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            aria-label="Last name"
          />
        </div>
      </div>
    </div>
  );
}
