import React from 'react'

export default function Extras({formData,setFormData}) {

  function handleChange(e) {
    const inputName = e.target.name;
    const l=inputName.length
    const val = e.target.value;
    const num = Number(inputName.charAt(l - 1))
    if (inputName.startsWith("s"))
    {
      const temp = formData.skills
      temp[num-1]=val
    setFormData({ ...formData, skills:temp });
    }
    else {
        const temp = formData.achievements;
        temp[num - 1] = val;
        setFormData({ ...formData, achievements: temp }); 
    }
  }
  return (
    <div>
      <div>
        <h>Skills/Languages</h>
        <div class="row">
          <div class="col">
            <input
              name="skill1"
              onChange={handleChange}
              type="text"
              value={formData.skills[0]}
              class="form-control"
              placeholder="skill 1"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              name="skill2"
              onChange={handleChange}
              type="text"
              value={formData.skills[1]}
              class="form-control"
              placeholder="skill 2"
              aria-label="Last name"
            />
          </div>
          <div class="col">
            <input
              name="skill3"
              value={formData.skills[2]}
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="skill 3"
              aria-label="First name"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              name="skill4"
              onChange={handleChange}
              type="text"
              value={formData.skills[3]}
              class="form-control"
              placeholder="skill 4"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              name="skill5"
              onChange={handleChange}
              type="text"
              value={formData.skills[4]}
              class="form-control"
              placeholder="skill 5"
              aria-label="Last name"
            />
          </div>
          <div class="col">
            <input
              name="skill6"
              onChange={handleChange}
              type="text"
              class="form-control"
              value={formData.skills[5]}
              placeholder="skill 6"
              aria-label="First name"
            />
          </div>
        </div>
      </div>
      <div>
        <h>Achievements</h>
        <div class="row">
          <div class="col">
            <input
              name="achievement1"
              onChange={handleChange}
              type="text"
              value={formData.achievements[0]}
              class="form-control"
              placeholder="achievement 1"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              value={formData.achievements[1]}
              name="achievement2"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="achievement 2"
              aria-label="Last name"
            />
          </div>
          <div class="col">
            <input
              value={formData.achievements[2]}
              name="achievement3"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="achievement 3"
              aria-label="First name"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              value={formData.achievements[3]}
              name="achievement4"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="achievement 4"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              value={formData.achievements[4]}
              name="achievement5"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="achievement 5"
              aria-label="Last name"
            />
          </div>
          <div class="col">
            <input
              value={formData.achievements[5]}
              name="achievement6"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="achievement 6"
              aria-label="First name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
