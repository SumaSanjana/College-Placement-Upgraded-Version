import { useState } from 'react';
import axios from 'axios';

export default function ManageJobs() {
  const [form, setForm] = useState({ title: '', description: '', company: '', salary: '', place: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.company || !form.salary || !form.place) {
      setError('All fields are required');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/recruiter/job', form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Job posted successfully');
      setForm({ title: '', description: '', company: '', salary: '', place: '' });
      setError('');
    } catch (err) {
      setError(err.response?.data.message || 'Error posting job');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post New Job</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Job Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label>Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label>Salary ($)</label>
          <input
            type="number"
            min="0"
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={form.place}
            onChange={(e) => setForm({ ...form, place: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Post Job
        </button>
      </form>
    </div>
  );
}