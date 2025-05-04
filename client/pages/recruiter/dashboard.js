import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

export default function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/recruiter/jobs', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setJobs(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load jobs');
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const viewApplicants = async (jobId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/recruiter/applicants/${jobId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSelectedJob(jobId);
      setApplicants(res.data);
    } catch (err) {
      alert('Failed to load applicants');
    }
  };

  const scheduleInterview = async (studentId) => {
    try {
      const scheduledAt = prompt('Enter interview date and time (YYYY-MM-DD HH:mm):');
      if (!scheduledAt) return;
      
      const res = await axios.post('http://localhost:5000/api/recruiter/interview', {
        jobId: selectedJob,
        studentId,
        scheduledAt
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      setInterview(res.data);
      alert('Interview scheduled successfully!');
    } catch (err) {
      alert('Error scheduling interview');
    }
  };

  const makeDecision = async (studentId, status) => {
    try {
      await axios.post(
        `http://localhost:5000/api/recruiter/decision/${selectedJob}/${studentId}`,
        { status },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      
      alert(`Student ${status}`);
      viewApplicants(selectedJob);
    } catch (err) {
      alert('Error making decision');
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container error-message">{error}</div>;

  return (
    <div className="container">
      <Head>
        <title>Recruiter Dashboard - Job Portal</title>
      </Head>
      <h1 className="dashboard-title">Recruiter Dashboard</h1>
      
      <section>
        <h2 className="dashboard-title">Your Jobs</h2>
        <div className="grid-cards">
          {jobs.map(job => (
            <div key={job._id} className="card job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <button
                onClick={() => viewApplicants(job._id)}
                className="btn btn-primary"
              >
                View Applicants
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedJob && (
        <section>
          <h2 className="dashboard-title">Applicants</h2>
          <div className="grid-cards">
            {applicants.map(applicant => (
              <div key={applicant.student._id} className="card applicant-card">
                <h3>{applicant.student.profile?.name || 'No Name'}</h3>
                <p><strong>CGPA:</strong> {applicant.student.profile?.cgpa || 'N/A'}</p>
                <p><strong>Degree:</strong> {applicant.student.profile?.academicDetails?.degree || 'N/A'}</p>
                {applicant.student.profile?.resume && (
                  <a 
                    href={applicant.student.profile.resume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Resume
                  </a>
                )}
                <div className="applicant-actions">
                  <button
                    onClick={() => scheduleInterview(applicant.student._id)}
                    className="btn btn-success"
                  >
                    Schedule Interview
                  </button>
                  <button
                    onClick={() => makeDecision(applicant.student._id, 'accepted')}
                    className="btn btn-primary"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => makeDecision(applicant.student._id, 'rejected')}
                    className="btn btn-danger"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {interview && (
        <div className="video-call-container">
          <h2 className="dashboard-title">Video Interview</h2>
          <VideoCall peerId={interview.peerId} />
        </div>
      )}
    </div>
  );
}