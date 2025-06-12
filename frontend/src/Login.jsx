import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 3000);
      return;
    }
    if (password !== email) {
      setError('Password should match the email');
      setTimeout(() => setError(''), 3000);
      return;
    }
    setError('');
    navigate('/dashboard');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
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
        `}
      </style>

      <div style={styles.formContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
          alt="leaf"
          style={styles.leafIcon}
        />
        <h1 style={styles.title}>Welcome to Farm Connect</h1>
        <p style={styles.subtitle}>Already have an account?</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>Email</label>
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
            <label htmlFor="password" style={styles.label}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password must match email"
                style={{ ...styles.input, paddingRight: '2.5rem' }}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={styles.eyeButton}
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          <button type="submit" style={styles.button}>Log In</button>

          <p style={styles.footerText}>
            Don't have an account? <span style={styles.signupLink}>Sign up</span>
          </p>
        </form>
      </div>

      {error && (
        <div style={{ ...styles.errorPopup, animation: 'bounce 1s infinite' }}>
          {error}
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
    background: 'linear-gradient(135deg,rgb(1, 103, 16),rgb(8, 143, 134),rgb(4, 33, 114))',
    backgroundSize: '400% 400%',
    animation: 'gradientMove 15s ease infinite',
    padding: '1rem'
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
    overflow: 'hidden'
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#a3e635',
    textShadow: '0 0 10px #22c55e'
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#7dd3fc'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  label: {
    marginBottom: '0.25rem',
    fontWeight: '600',
    display: 'block',
    color: '#e0f2fe'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: '#f0fdfa'
  },
 button: {
  width: '100%',
  background: 'linear-gradient(135deg,rgb(11, 104, 20), #22d3ee)',
  color: 'white',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  fontWeight: '600',
  border: '2px solid transparent',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  backgroundSize: '200% 200%',
  backgroundPosition: '0% 50%',
},
 
  footerText: {
    textAlign: 'center',
    fontSize: '0.875rem',
    marginTop: '1rem'
  },
  signupLink: {
    color: '#38bdf8',
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  errorPopup: {
    position: 'absolute',
    bottom: '1.5rem',
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  leafIcon: {
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    filter: 'drop-shadow(0 0 2pxrgb(9, 148, 12))'
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  eyeButton: {
    position: 'absolute',
    top: '50%',
    right: '0.75rem',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.25rem'
  }
};

export default Login;
