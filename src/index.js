import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const status = "Next player :" + (this.state.xIsNext ? "X" : "o");

    return (
      <div>
        <div className="status"> {status} </div>
        <div className="board-row">
          {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
    };
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div> {/*status*/} </div> <ol> </ol>
        </div>
      </div>
    );
  }
}
class Map extends React.Component {
  render() {
    var names = ["Alice", "tt", "Kitty"];
    return (
      <div>
        <Router> aaa </Router>
        {names.map((name, index) => {
          return <div key={index}> {name} </div>;
        })}
      </div>
    );
  }
}

// ----------------
ReactDOM.render(<Game />, document.getElementById("root"));
ReactDOM.render(<Map />, document.getElementById("map"));

