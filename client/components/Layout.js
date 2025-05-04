import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Layout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (token && role) {
      setUser({ role });
    } else if (!['/login', '/signup', '/'].includes(router.pathname)) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Job Portal</title>
        <meta name="description" content="Job Portal Application" />
      </Head>
      
      {user && (
        <header className="dashboard-header">
          <div className="container">
            <nav className="dashboard-nav">
              <div>
                <h1>Job Portal</h1>
              </div>
              <div className="dashboard-nav-links">
                {user.role === 'student' && (
                  <>
                    <a href="/student/dashboard">Dashboard</a>
                    <a href="/student/profile">Profile</a>
                  </>
                )}
                {user.role === 'recruiter' && (
                  <>
                    <a href="/recruiter/dashboard">Dashboard</a>
                    <a href="/recruiter/jobs">Jobs</a>
                  </>
                )}
                {user.role === 'admin' && (
                  <a href="/admin/dashboard">Dashboard</a>
                )}
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
              </div>
            </nav>
          </div>
        </header>
      )}
      
      <main className="container">
        {children}
      </main>
    </>
  );
}