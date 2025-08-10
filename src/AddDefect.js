import React, { useState } from 'react';

const AddDefect = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('UI');
    const [priority, setPriority] = useState('Low');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDefect = {
            title,
            description: desc,
            category,
            priority,
            status: 'Open'
        };

        onAdd(newDefect);
        setMessage('✅ Defect added successfully!');
        setTitle('');
        setDesc('');
        setCategory('UI');
        setPriority('Low');
    };

    return (
        <div>
            <h3>Add New Defect</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Defect Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                /><br /><br />

                <textarea
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                /><br /><br />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>UI</option>
                    <option>Functionality</option>
                    <option>Performance</option>
                    <option>Other</option>
                </select><br /><br />

                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select><br /><br />

                <button type="submit">Add Defect</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddDefect;
