import React from "react";

function Project({ p_num, handleChange, data }) {
  return (
    <div>
      <p className="text-center">Project {p_num}</p>
      <div class="mb-3">
        <input
          value={data.title}
          onChange={(e) => handleChange(e, p_num)}
          name="title"
          type="text"
          class="form-control"
          placeholder="title"
        />
        <input
          value={data.link}
          onChange={(e) => handleChange(e, p_num)}
          name="link"
          type="text"
          class="form-control"
          placeholder="link"
        />{" "}
        <input
          value={data.description}
          onChange={(e) => handleChange(e, p_num)}
          name="description"
          type="text"
          class="form-control"
          placeholder="description"
        />
      </div>
    </div>
  );
}
export default function Projects({ formData, setFormData }) {

  function handleChange(e, num) {
    const inputName = e.target.name;
    const val = e.target.value;
    const s = "project" + num;
    // console.log(s);
    const temp = formData[s];
    temp[inputName] = val;
    setFormData({ ...formData, [s]: temp });
  }

  return (
    <div>
      <Project
        handleChange={handleChange}
        data={formData.project1}
        p_num={1}
      ></Project>
      <Project
        handleChange={handleChange}
        data={formData.project2}
        p_num={2}
      ></Project>
      <Project
        handleChange={handleChange}
        data={formData.project3}
        p_num={3}
      ></Project>
    </div>
  );
}
