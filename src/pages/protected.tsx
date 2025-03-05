import { useState } from 'react';
import axios from 'axios';

export default function ProtectedPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/authenticate', { email, password });
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  if (isAuthenticated) {
    return <div>Welcome to the protected page!</div>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
