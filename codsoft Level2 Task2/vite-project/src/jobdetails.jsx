import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function JobDetails ()
 {
  
    const { id } = useParams();
  const [job, setJob] = useState(null);
  const [resume, setResume] = useState(null); // State for the selected resume file

  useEffect(() => {
    fetch(`http://localhost:8080/api/jobs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setJob(data))
      .catch(error => console.error('Error fetching job details:', error));
  }, [id]);

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleApply = async () => {
    if (!resume) {
      toast.warning("Please select a resume to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobId', id);

    try {
      const response = await fetch('http://localhost:8080/api/apply', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success('Resume uploaded successfully!');
    } catch (error) {
      console.error('Error uploading resume:', error);
      toast.error('Failed to upload resume.');
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
        background:"linear-Gradient(90deg,#e0d43e,#da61ff)",minHeight:"85vh"}}>
      <h3><b>{job.title}</b></h3>
      <p><b>{job.description}</b></p>
      <p><b>Company: {job.company}</b></p>
      <p><b>Location: {job.location}</b></p>
      <p><b>Salary: {job.salary}</b></p>
      <p><b>contactNo: {job.contact}</b></p>
      <p><b>Email: {job.email}</b></p>
      <p>For further details contact directly to the company though phNo or by email.</p>
      <p><b>NOTE*:</b> If you are willing to apply upload your resume!</p>
      <div className="apply-section">
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button class="btn btn-primary my-2 my-sm-0" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

export default JobDetails;
