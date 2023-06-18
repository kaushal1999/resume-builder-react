import React from 'react'


function Project({p_num}) {
  
  return (
    <div>
      <p className='text-center'>Project {p_num}</p>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="title"
        />
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="link"
        />{" "}
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="description"
        />
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <div>
      <Project p_num={1}></Project>
      <Project p_num={2}></Project>
      <Project p_num={3}></Project>
    </div>
  );
}
