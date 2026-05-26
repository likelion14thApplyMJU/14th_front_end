import React from 'react';

function Viewer({ count }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <h1>Counter</h1>
            </div>
            <div style={{ backgroundColor: 'lightgray', padding: '1em', borderRadius: '10px' }}>
                <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{count}</p>
            </div>
        </div>
    );
}

export default Viewer;