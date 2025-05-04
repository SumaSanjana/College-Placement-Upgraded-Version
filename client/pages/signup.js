import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Signup() {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', role: 'student' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email: form.email,
        password: form.password,
        role: form.role
      });
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => router.push('/login'), 2000);
    } catch (err) {
      setError(err.response?.data.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <Head>
        <title>Sign Up - Job Portal</title>
      </Head>
      <h1 className="auth-title">Create an Account</h1>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
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
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
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
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <div className="auth-link">
        Already have an account? <Link href="/login">Login here</Link>
      </div>
    </div>
  );
} 