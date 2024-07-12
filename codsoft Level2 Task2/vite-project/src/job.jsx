import Footer from "./footer"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Job()
    {
        const [jobs, setJobs] = useState([]);

        useEffect(() => {
          // Fetch job openings from the API
          fetch('http://localhost:8080/api/jobs')
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
        }, []);      
        
    return(
        <div style={{
            background:"linear-Gradient(90deg,#0062ff,#da61ff)",minHeight:"100vh",padding:"20px"}}>
        {/* <h1>Job Openings</h1> */}
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="job" style={{
            background:"linear-Gradient(90deg,#e0d43e,#da61ff)"}}>
              <h2>{job.title}</h2>
            {/* <p>{job.description}</p> */}
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <Link to={`/jobs/${job.id}`}>
                view details≫
            </Link>
          </li>
        ))}
      </ul>
            <Footer/>
        </div>
    )
}
export default Job