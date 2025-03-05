import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/check-auth');
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          router.push('/login');
        }
      } catch (error) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
