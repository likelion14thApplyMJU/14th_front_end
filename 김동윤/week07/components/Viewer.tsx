const Viewer = ({ count }: { count: number }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div>
                <h1>Simple Counter</h1>
            </div>
            <div style={{backgroundColor: 'lightgray', padding: '1em', borderRadius: '10px'}}>
                <p>현재 카운트: </p>
                <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{count}</p>
            </div>
        </div>
    )
};

export default Viewer;