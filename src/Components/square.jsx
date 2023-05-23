import './square.css';

function square(props) {
    

    return (
            <td onClick={() => props.playerMark(props.num)} className="checkBox">{props.squares[props.num]}</td>
    );
}

export default square