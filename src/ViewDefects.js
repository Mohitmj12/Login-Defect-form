import React, { useState } from 'react';
import './ViewDefects.css';

const ViewDefects = ({ defects, onStatusChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter defects by title or description
    const filteredDefects = defects.filter(defect =>
        defect.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        defect.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h3>Defect Details</h3>

            <input
                type="text"
                placeholder="🔍 Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '8px', width: '100%', marginBottom: '15px', borderRadius: '6px' }}
            />

            {filteredDefects.length === 0 ? (
                <p>No defects found.</p>
            ) : (
                <table className="defect-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDefects.map((defect, index) => (
                            <tr
                                key={index}
                                className={`row-priority-${defect.priority.toLowerCase()} ${defect.status === 'Fixed' ? 'fade-fixed' : 'fade-open'
                                    }`}
                            >
                                <td>{defect.title}</td>
                                <td>{defect.description}</td>
                                <td>{defect.category}</td>
                                <td>{defect.priority}</td>
                                <td>
                                    <span className={`status-badge ${defect.status.toLowerCase()}`}>
                                        {defect.status}
                                    </span>
                                </td>
                                <td>
                                    {defect.status === 'Open' ? (
                                        <button className="mark-fixed-btn" onClick={() => onStatusChange(index)}>
                                            Mark as Fixed
                                        </button>
                                    ) : (
                                        <span className="fixed-label">✅ Fixed</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ViewDefects;
