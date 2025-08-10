import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('tester');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(role);  // send role to App.js
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            /><br /><br />

            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="tester">Tester</option>
                <option value="developer">Developer</option>
            </select><br /><br />

            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
