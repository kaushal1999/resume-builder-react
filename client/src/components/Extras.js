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
        const temp = formData.interests;
        temp[num - 1] = val;
        setFormData({ ...formData, interests: temp }); 
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
        <h>Interests</h>
        <div class="row">
          <div class="col">
            <input
              name="interest1"
              onChange={handleChange}
              type="text"
              value={formData.interests[0]}
              class="form-control"
              placeholder="interest 1"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              value={formData.interests[1]}
              name="interest2"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="interest 2"
              aria-label="Last name"
            />
          </div>
          <div class="col">
            <input
              value={formData.interests[2]}
              name="interest3"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="interest 3"
              aria-label="First name"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              value={formData.interests[3]}
              name="interest4"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="interest 4"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <input
              value={formData.interests[4]}
              name="interest5"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="interest 5"
              aria-label="Last name"
            />
          </div>
          <div class="col">
            <input
              value={formData.interests[5]}
              name="interest6"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="interest 6"
              aria-label="First name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
