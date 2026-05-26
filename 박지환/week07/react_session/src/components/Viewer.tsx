type ViewerProps = {
    state: number;
};

const Viewer =({state}:ViewerProps)=>{
    return(
        <div>
            <p>현재 카운트 :</p>
            <h3>{state}</h3>
        </div>
    )

};

export default Viewer;