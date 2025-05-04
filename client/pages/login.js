import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!form.email || !form.password) {
      setError('All fields are required');
      return;
    }
    
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      router.push(`/${res.data.role}/dashboard`);
    } catch (err) {
      setError(err.response?.data.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <Head>
        <title>Login - Job Portal</title>
      </Head>
      <h1 className="auth-title">Login</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="form-control"
          >
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="auth-link">
        Don't have an account? <Link href="/signup">Sign up here</Link>
      </div>
    </div>
  );
}