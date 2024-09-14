import React, { useState } from 'react'
import axios from "axios"
function form() {
  const [name, setJobName] = useState("");
  const [details, setJobDetails] = useState("");
  const [skills, setJobSkills] = useState("");
  const [salary, setJobSalary] = useState("");
  const [photo, setPhoto] = useState("");

  const productFormHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);      
    data.append("details", details);  
    data.append("skills", skills);    
    data.append("salary", salary);    
    data.append("photo", photo);     
  
    try {
      const res = await axios.post("http://localhost:3000/uploadJobs", data);
      if(res.data.success)   console.log("Your Job has been successfully uploaded to the back-end" , res.data);
   
    } catch (error) {
      console.log(data);
      console.log("Hey, there is some issue uploading your job to the back-end", error);
    }
  }
  return (
    <section className='formSection'>
        <div>
            <form onSubmit={productFormHandler} encType='multipart/form-data'>
                <input type="text" placeholder='Enter Job Name here...' name='name' onChange={(e)=>setJobName(e.target.value)}/>
                <input type="text" placeholder='Enter Job Details here...' name='details' onChange={(e)=>setJobDetails(e.target.value)}/>
                <input type="text" placeholder='Enter Required Skills here...' name='details' onChange={(e)=>setJobSkills(e.target.value)}/>
                <input type="number" placeholder='Enter Salary here...' name='salary' onChange={(e)=>setJobSalary(e.target.value)}/>
                <input type="file" name='photo' onChange={(e)=>setPhoto(e.target.files[0])}/>
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    </section>
  )
}

export default form
