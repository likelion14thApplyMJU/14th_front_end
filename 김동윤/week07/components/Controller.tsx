const Controller = ({setCount}: {setCount: React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <div style={{backgroundColor: 'lightgray', display: 'flex', gap: '1em', padding: '1em', borderRadius: '10px', marginTop: '1em'}}>
            <button onClick={() => setCount(prev => prev - 1)}>-1</button>
            <button onClick={() => setCount(prev => prev - 10)}>-10</button>
            <button onClick={() => setCount(prev => prev - 100)}>-100</button>
            <button onClick={() => setCount(prev => prev + 100)}>+100</button>
            <button onClick={() => setCount(prev => prev + 10)}>+10</button>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        </div>
    )
}

export default Controller