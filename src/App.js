// Main App component
import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Default to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Persist preference when changed
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const styles = {
    dashboard: {
      minHeight: '100vh',
      backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
      color: darkMode ? '#ffffff' : '#333333',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      transition: 'background-color 0.3s, color 0.3s',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    toggle: {
      padding: '10px 20px',
      backgroundColor: darkMode ? '#4a4a4a' : '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    settings: {
      backgroundColor: darkMode ? '#2a2a2a' : '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    settingRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: `1px solid ${darkMode ? '#444' : '#eee'}`,
    },
  };

  return (
    <div className="dashboard" style={styles.dashboard}>
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>
        <button onClick={toggleDarkMode} style={styles.toggle}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      
      <div style={styles.settings}>
        <div style={styles.settingRow}>
          <span>Theme</span>
          <span>{darkMode ? 'Dark' : 'Light'}</span>
        </div>
        <div style={styles.settingRow}>
          <span>System Preference</span>
          <span>{window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'}</span>
        </div>
      </div>
      
      <p style={{ marginTop: '20px' }}>
        Welcome to your dashboard! Dark mode is {darkMode ? 'enabled' : 'disabled'}.
      </p>
    </div>
  );
}

export default App;
