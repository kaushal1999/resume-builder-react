import  { useState } from 'react'

export default function useLocalStorage() {
     
    let initialValue = localStorage.getItem("formData");
    if (initialValue === null) initialValue = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        website: "",
        github: "",
        linkedin: "",
        college: "",
        from_clg: "",
        to_clg: "",
        degree: "",
        course: "",
        project1: { title: "", link: "", description: "" },
        project2: { title: "", link: "", description: "" },
        project3: { title: "", link: "", description: "" },
        experience1: { org: "", pos: "", description: "" },
        experience2: { org: "", pos: "", description: "" },
        skills: [],
        achievements: [],
      }
      else{
        initialValue=JSON.parse(initialValue);
      }
      
    
    const [formData, setFormData] = useState(initialValue)
    
    function setValue(value) {
      localStorage.setItem("formData",JSON.stringify(value))
       setFormData(value);
    }
    
    return [formData,setValue]
}
