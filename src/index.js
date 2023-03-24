import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    /* Necesitas siempre llamar super cuando defines el constructor de una subclase.
    Todas las clases de componentes de React que tienen un constructor deben empezar con una llamada a super(props)*/
    constructor(props) {
        super(props);
        this.state = {value: null,};
    }

    /*Ten en cuenta cómo con onClick={() => console.log('click')}, estamos pasando una función como valor de la prop onClick.
    React solo llamará a esta función después de un click.
    Olvidar () => y escribir onClick={console.log('click')} es un error común, y se ejecutaría cada vez que el componente se re-renderice.*/
    render() {
        return (
            <button className="square" onClick={() => console.log('click')}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);