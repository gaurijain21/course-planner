'use client';
import './styles.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../lib/firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('Logged in as:', user.displayName);
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Google login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image" />
      <div className="login-form">
        <h1>Log in to UC Santa Cruz</h1>
        <p className="subtext">Use your UCSC Google account to continue.</p>

        <button onClick={handleGoogleLogin} className="google-btn">
          <img src="/google-icon.svg" alt="Google" />
          Continue with Google
        </button>

        {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
      </div>
    </div>
  );
}
