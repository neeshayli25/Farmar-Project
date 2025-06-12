// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    navigate(`/${role.toLowerCase()}`);
  };

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .role-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px #0ea5e9;
          }

          .role-card {
            transition: all 0.3s ease-in-out;
          }

          .role-icon {
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <div style={styles.container}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
          alt="logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Welcome to Farm Connect</h1>
        <div style={styles.optionsContainer}>
          <div className="role-card" style={styles.card} onClick={() => handleNavigation('Farmer')}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2909/2909742.png"
              alt="Farmer"
              className="role-icon"
              style={styles.icon}
            />
            <h2 style={styles.cardText}>Farmer</h2>
          </div>
          <div className="role-card" style={styles.card} onClick={() => handleNavigation('Buyer')}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
              alt="Buyer"
              className="role-icon"
              style={styles.icon}
            />
            <h2 style={styles.cardText}>Buyer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #064e3b, #0e7490, #1e3a8a)',
    backgroundSize: '400% 400%',
    animation: 'gradientMove 15s ease infinite',
    padding: '1rem',
  },
  container: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 50, 0.6)',
    borderRadius: '1rem',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    animation: 'fadeIn 1.2s ease-in-out',
  },
  logo: {
    width: '100px',
    height: '100px',
    marginBottom: '1rem',
    filter: 'drop-shadow(0 0 10px #22c55e)'
  },
  title: {
    fontSize: '2.5rem',
    color: '#a3e635',
    marginBottom: '2rem',
    textShadow: '0 0 10px #22c55e'
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  card: {
    backgroundColor: '#f0fdfa',
    padding: '1.5rem',
    borderRadius: '1rem',
    cursor: 'pointer',
    width: '160px',
    textAlign: 'center'
  },
  icon: {
    width: '72px',
    height: '72px',
    marginBottom: '0.5rem'
  },
  cardText: {
    fontSize: '1.25rem',
    color: '#0f172a',
    fontWeight: '600'
  }
};

export default Home;
