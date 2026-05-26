const Main = ({ state }: { state: number }) => {
    return(
        <div style={{
            backgroundColor : "#e0e0e0",
            padding: "20px",
        }}>
            <h3>현재카운트 :</h3>
            <h3>{state}</h3>
                <div style={{
                    backgroundColor : "#e0e0e0",
                    padding: "10px",
        }}>                             
                </div>
        </div>
    );
};

export default Main;