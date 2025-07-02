import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSignupSuccess('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      if (isSignup) {
        const res = await axios.post('/api/auth/signup', { email, password });

        setSignupSuccess(res.data.message);
        setIsSignup(false);
        setEmail('');
        setPassword('');
      } else {
        const res = await axios.post('/api/auth/login', { email, password });

        if (res.status === 200) {
          navigate('/farmer'); // Redirect after login success
        }
      }
    } catch (err) {
      console.error('Full error:', err);
      setError(err.response?.data?.error || err.message || 'An error occurred');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={styles.wrapper}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .login-button {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border: 3px solid transparent;
          border-radius: 0.5rem;
          background-color: #0284c7;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .login-button::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(270deg, #10b981, #3b82f6, #0ea5e9, #14b8a6);
          background-size: 600% 600%;
          border-radius: 1rem;
          animation: gradientMove 5s linear infinite;
        }
        .login-button:hover {
          border-radius: 1rem;
          box-shadow: 0 0 10px #38bdf8, 0 0 20px #22d3ee;
        }
        input:focus {
          border: 2px solid #0ea5e9;
          outline: none;
          box-shadow: 0 0 10px #38bdf8;
        }
      `}</style>

      <div style={styles.formContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
          alt="leaf"
          style={styles.leafIcon}
        />
        <h1 style={styles.title}>
          {isSignup ? 'Create Account' : 'Welcome to Farm Connect'}
        </h1>
        <p style={styles.subtitle}>
          {isSignup ? 'Start your journey' : 'Already have an account?'}
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{ ...styles.input, paddingRight: '2.5rem' }}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={styles.eyeButton}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button" style={styles.button}>
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>

          <p style={styles.footerText}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              style={styles.signupLink}
              onClick={() => setIsSignup((prev) => !prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsSignup((prev) => !prev);
              }}
            >
              {isSignup ? 'Log in' : 'Sign up'}
            </span>
          </p>
        </form>
      </div>

      {error && (
        <div
          style={{
            ...styles.popup,
            backgroundColor: '#ef4444',
            animation: 'bounce 1s infinite',
          }}
        >
          {error}
        </div>
      )}

      {signupSuccess && (
        <div style={{ ...styles.popup, backgroundColor: '#22c55e' }}>
          {signupSuccess}
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(135deg,rgb(1, 103, 16),rgb(8, 143, 134),rgb(4, 33, 114))',
    backgroundSize: '400% 400%',
    animation: 'gradientMove 15s ease infinite',
    padding: '1rem',
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 50, 0.6)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#a3e635',
    textShadow: '0 0 10px #22c55e',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#7dd3fc',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    marginBottom: '0.25rem',
    fontWeight: '600',
    display: 'block',
    color: '#e0f2fe',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: '#f0fdfa',
  },
  button: {
    width: '100%',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    border: '2px solid transparent',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  footerText: {
    textAlign: 'center',
    fontSize: '0.875rem',
    marginTop: '1rem',
  },
  signupLink: {
    color: '#38bdf8',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  popup: {
    position: 'absolute',
    bottom: '1.5rem',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  leafIcon: {
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    filter: 'drop-shadow(0 0 2px rgb(9, 148, 12))',
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  eyeButton: {
    position: 'absolute',
    top: '50%',
    right: '0.75rem',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.25rem',
  },
};

export default Login;
