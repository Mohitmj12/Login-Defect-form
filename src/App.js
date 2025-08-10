import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './login';
import AddDefect from './AddDefect';
import ViewDefects from './ViewDefects';

function App() {
  const [role, setRole] = useState(null);            // "tester" or "developer"
  const [view, setView] = useState('dashboard');     // to toggle between add/view
  const [defects, setDefects] = useState(() => {
    const stored = localStorage.getItem('defects');
    return stored ? JSON.parse(stored) : [];
  });

  // Save defects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('defects', JSON.stringify(defects));
  }, [defects]);

  const handleLogin = (userRole) => {
    setRole(userRole);      // Save the role (tester/developer)
    setView('dashboard');   // Reset to default view
  };

  const handleLogout = () => {
    setRole(null);          // Clear role
    setView('dashboard');   // Reset view
  };

  const handleAddDefect = (newDefect) => {
    setDefects([...defects, newDefect]); // Add new defect to list
    setView('view');                     // Go back to view after adding
  };

  const handleStatusChange = (index) => {
    const updated = [...defects];
    updated[index].status = 'Fixed';    // Mark specific defect as fixed
    setDefects(updated);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor:
          role === 'tester' ? '#e3f2fd' :
            role === 'developer' ? '#e8f5e9' : '#ffffff',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      {!role ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h2>Welcome, {role}!</h2>

          <div style={{ marginBottom: '15px' }}>
            {role === 'tester' && (
              <button onClick={() => setView('add')}>
                ➕ Add Defect
              </button>
            )}
            <button onClick={() => setView('view')} style={{ marginLeft: '10px' }}>
              📋 View Defects
            </button>
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
              🚪 Logout
            </button>
          </div>

          <hr />

          {view === 'add' && role === 'tester' && (
            <AddDefect onAdd={handleAddDefect} />
          )}

          {view === 'view' && (
            <ViewDefects defects={defects} onStatusChange={handleStatusChange} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
