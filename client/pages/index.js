import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      router.push(`/${role}/dashboard`);
    }
  }, [router]);

  return (
    <div className="container">
      <Head>
        <title>Job Portal</title>
      </Head>
      <h1>Welcome to Job Portal</h1>
      <div style={{ marginTop: '20px' }}>
        <Link href="/login" className="btn btn-primary" style={{ marginRight: '10px' }}>
          Login
        </Link>
        <Link href="/signup" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
}