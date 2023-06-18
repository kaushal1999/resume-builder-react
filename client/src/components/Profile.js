import React from "react";


export default function Profile() {
    
  return (
    <div className="container">
      
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name*"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name*"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Your website"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Github"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Linkedin"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Twitter"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Facebook"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Instagram"
            aria-label="Last name"
          />
        </div>
      </div>
      
    </div>
  );
}