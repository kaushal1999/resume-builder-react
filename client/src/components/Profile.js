import React, { useState } from "react";


export default function Profile({formData,setFormData}) {
  
  

  function handleChange(e) {
    const inputName = e.target.name;
    const val=e.target.value
    setFormData({...formData,[inputName]:val})
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
              placeholder="Phone Number"
              name="phone"
              aria-name="Last name"
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
              aria-name="First name"
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
              aria-name="Last name"
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
              aria-name="First name"
            />
          </div>
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              name="twitter"
              value={formData.twitter}
              className="form-control"
              placeholder="Twitter"
              aria-name="Last name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              name="facebook"
              placeholder="Facebook"
              aria-name="First name"
              value={formData.facebook}
            />
          </div>
          <div className="col">
            <input
              onChange={handleChange}
              type="text"
              name="instagram"
              className="form-control"
              placeholder="Instagram"
              value={formData.instagram}
              aria-name="Last name"
            />
          </div>
        </div>
        
      </form>
    </div>
  );
}