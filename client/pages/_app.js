import '../styles/globals.css';        // Global CSS (this should already be here)
import '../styles/dashboard.css';      // Add the import of your dashboard.css here
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
