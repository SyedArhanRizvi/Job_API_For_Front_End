import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllJobs.css";
function AllJobs() {
  const [jobsData, setJobsData] = useState([]);
  // const jobsData = null;

  const findAllJobs = async () => {
    try {
      const allJobsData = await axios.get("http://localhost:3000/findAllJobs");
      //  const result = allJobsData.data;
      setJobsData(allJobsData.data);
      //  jobsData = result;
      console.log("Your all jobs data is here.. ", result);
    } catch (error) {
      console.log(
        "There is some issues in your api to fetch your api data from back-end",
        error
      );
    }
  };
  console.log(jobsData);

  useEffect(() => {
    findAllJobs();
  }, []);
  // ;

  return (
    <section className="jobsSection">
      {!jobsData ? (
        <h1>There is no such jobs here..</h1>
      ) : (
        jobsData.map((job) => {
          return (
            <div className="jobsCard">
              <div className="img">
                <img src={job.photo} alt="This is an image" />
              </div>
              <div className="details">
                <h1>{job.name}</h1>
                <p>{job.details}</p>
                <p>
                  <b>Skills Required : {job.skills}</b>
                </p>
                <p>{job.salary}</p>
                <button className="btn">Apply</button>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}

export default AllJobs;
