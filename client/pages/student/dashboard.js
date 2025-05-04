import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudentDashboard() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/recruiter/jobs', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setJobs(res.data);
      } catch (err) {
        setError('Failed to load jobs');
      }
    };
    fetchJobs();
  }, []);

  const applyJob = async (jobId) => {
    try {
      await axios.post(`http://localhost:5000/api/student/apply/${jobId}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Application submitted');
    } catch (err) {
      alert(err.response?.data.message || 'Error applying for job');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Available Jobs
        </h1>

        {error && (
          <p className="text-red-600 text-center mb-6 font-medium">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map(job => (
            <div
              key={job._id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{job.title}</h2>
              <p className="text-gray-700 mb-1"><strong>Company:</strong> {job.company}</p>
              <p className="text-gray-700 mb-1">
                <strong>Salary:</strong> {job.salary !== undefined ? `$${Number(job.salary).toLocaleString()}` : 'Not specified'}
              </p>
              <p className="text-gray-700 mb-1"><strong>Location:</strong> {job.place || 'Not specified'}</p>
              <p className="text-gray-700 mb-4"><strong>Description:</strong> {job.description}</p>
              <button
                onClick={() => applyJob(job._id)}
                className="w-full bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}