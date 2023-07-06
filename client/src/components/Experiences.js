import React from 'react'

function Experience({ e_num ,handleChange,data}) {
  
    return (
      <div>
        <p>Experience {e_num}</p>
        <div className="row">
          <div className="col">
            <input
              value={data.org}
              onChange={(e) => handleChange(e_num, e)}
              type="text"
              name="org"
              className="form-control"
              placeholder="organization"
              aria-label="Last name"
            ></input>
          </div>
          <div className="col ">
            <input
              value={data.pos}
              onChange={(e) => handleChange(e_num, e)}
              name="pos"
              type="text"
              className="form-control"
              placeholder="Position"
              aria-label="Last name"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              value={data.description}
              onChange={(e) => handleChange(e_num, e)}
              type="text"
              name="description"
              className="form-control"
              placeholder="describe about your job"
            ></textarea>
          </div>
        </div>
      </div>
    );
}
export default function Experiences({formData,setFormData}) {
  
  function handleChange(num, e) {
    let temp;
    if (num === 1) {
      temp = formData.experience1
    temp[e.target.name] = e.target.value;
     setFormData({ ...formData ,experience1:temp});
      
    }
    else {
      temp = formData.experience2
    temp[e.target.name] = e.target.value;
      
       setFormData({ ...formData, experience2: temp });
    }
  }
  
  return (
    <div>
      <Experience
        e_num={1}
        data={formData.experience1}
        handleChange={handleChange}
      ></Experience>
      <Experience
        e_num={2}
        handleChange={handleChange}
        data={formData.experience2}
      ></Experience>
    </div>
  );
}
