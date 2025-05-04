import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

export default function AdminDashboard() {
  const [insights, setInsights] = useState({ 
    students: 0, 
    recruiters: 0, 
    jobs: 0, 
    applications: 0 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/insights', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setInsights(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load insights');
        setLoading(false);
      }
    };
    fetchInsights();
  }, []);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container error-message">{error}</div>;

  return (
    <div className="container">
      <Head>
        <title>Admin Dashboard - Job Portal</title>
      </Head>
      <h1 className="dashboard-title">Admin Insights</h1>
      <div className="grid-cards">
        <div className="card">
          <h3>Total Students</h3>
          <p className="stat-value">{insights.students}</p>
        </div>
        <div className="card">
          <h3>Total Recruiters</h3>
          <p className="stat-value">{insights.recruiters}</p>
        </div>
        <div className="card">
          <h3>Total Jobs</h3>
          <p className="stat-value">{insights.jobs}</p>
        </div>
        <div className="card">
          <h3>Total Applications</h3>
          <p className="stat-value">{insights.applications}</p>
        </div>
      </div>
    </div>
  );
}