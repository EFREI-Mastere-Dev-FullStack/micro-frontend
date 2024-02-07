const SquareBuilder = (props) => {
    const squares = [];
    for (let i = 0; i < props.numSquares; i++) {
        squares.push(<div key={i} className="square" style={{ width : '50px' ,height : '50px', backgroundColor: 'yellow', margin: '5px'}}></div>);
    }
    return (
        <div style={{display: 'inline-flex'}} className="square-container">
            {squares}
        </div>
    );
};

export default SquareBuilder;
