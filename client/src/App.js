import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

require('./js/chessboard-0.3.0')



class App extends Component {
  constructor(proos){
    super(props);
    state={
      puzzle: '',
      solution:'',
    }
  }
  render() {
    return (
      <div classNam="App" id="board2" style="width: 400px">
      </div>
    );
  }
}


var board2 = ChessBoard('board2', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
});

export default App;
