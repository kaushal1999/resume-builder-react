import React, { useState } from "react";

export default function Profile({ formData, setFormData }) {
  function handleChange(e) {
    const inputName = e.target.name;
    const val = e.target.value;
    setFormData({ ...formData, [inputName]: val });
  }

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              value={formData.firstname}
              className="form-control"
              placeholder="First name*"
              name="firstname"
            />
          </div>
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              value={formData.lastname}
              className="form-control"
              placeholder="Last name*"
              aria-name="Last name"
              name="lastname"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              value={formData.email}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Email"
              aria-name="First name"
              name="email"
            />
          </div>
          <div className="col">
            <input
              value={formData.phone}
              onChange={handleChange}
              type="number"
              className="form-control"
              placeholder="Contact Number"
              name="phone"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              value={formData.website}
              name="website"
              className="form-control"
              placeholder="Your website"
            />
          </div>
          <div className="col">
            <input
              name="github"
              value={formData.github}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Github"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              value={formData.linkedin}
              name="linkedin"
              className="form-control"
              placeholder="Linkedin"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
