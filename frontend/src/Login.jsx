import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 3000);
      return;
    }
    setError('');
    alert(`Logged in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={styles.wrapper}>
      {/* Internal CSS for animations */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>

      <div style={styles.formContainer}>
        <h1 style={styles.title}>Welcome to Farm Connect</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>

          <div>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Log In
          </button>

          <p style={styles.footerText}>
            Don't have an account?{' '}
            <span style={styles.signupLink}>Sign up</span>
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
    backgroundColor: '#d1fae5',
    position: 'relative',
    padding: '1rem',
  },
  formContainer: {
    backgroundColor: 'rgba(20, 83, 45, 0.6)',
    color: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem',
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
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  footerText: {
    textAlign: 'center',
    fontSize: '0.875rem',
    marginTop: '1rem',
  },
  signupLink: {
    color: '#93c5fd',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  errorPopup: {
    position: 'absolute',
    bottom: '1.5rem',
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

export default Login;
