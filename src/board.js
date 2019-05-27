import React from 'react';
import Square from './square';
import './App.css';

class Board extends React.Component{
  constructor(props){
    super(props)
    this.state={
      squareState: [0,0,0,0,0,0,0,0,0],
      //gameBoard populates the board on start components are stored in array
      gameBoard: [],
      playerTries: 4,
      gameInProgress: false,
      losingState: false,
      winningStreak: 0,
      backgroundChanger:["#e0fff9","#a8ffee","#21ffd3","pink","red"],
      backgroundStyle: 1
    }
  }



  refreshFunction = () =>{
//add function to refresh board or page
    this.setState({
      squareState: [0,0,0,0,0,0,0,0,0],
      gameBoard: [],
      playerTries: 4,
      gameInProgress: false,
      losingState: false
    })
  }

  playerAttempt = () => {
    let { playerTries } = this.state
      if(playerTries === 0){
        alert("You Lose")
        this.setState({winningStreak: 0})
        this.setState({losingState: true})
      }else{
      this.setState({playerTries: playerTries -1})
      }


  }
  //places a 1 in the square state array randomly determining the winning square
  randomNum = () => {
    //deconstruct square setState
    const {squareState} = this.state
    const arrlength = squareState.length
    //generate a random number between 0 and the length of the array of squarestate
    const randNumber = Math.floor(Math.random()*arrlength)
    // places a 1 randomly in the squareState array
    let arrayWithOne = squareState.splice(randNumber, 1, 1)
    this.setState({squareState: arrayWithOne})

  }
  playerWin = () => {
    let { winningStreak }=this.state
    this.setState({winningStreak: winningStreak+1})
  }
    startGame = () =>{
      const{ squareState } = this.state
      const {playerAttempt, refreshFunction, playerWin, nextLevel, Continue}= this
      this.randomNum()
      const board = squareState.map(mapHandler)
      //function to create squares and choose winning square
      function mapHandler(value, index,){


        return (<div
                className="singlesquare"
                key={index}>
                <Square
                  winningBool={value}
                  playerAttempt={playerAttempt}
                  refreshFunction={refreshFunction}
                  playerWin={playerWin}
                  nextLevel={nextLevel}
                  Continue={Continue}
                />
                </div>)

      }
      this.setState({gameBoard: board, gameInProgress: true})


    }
    render(){
      let { gameBoard, playerTries, gameInProgress, losingState, winningStreak} = this.state
      return(
        <div className="main">
        <div className="btn-container">
        <p>You have a winning streak of: {winningStreak}</p>

          <p>Lives Remaining: {playerTries}</p>
          {!gameInProgress &&
            <button className="start-btn" onClick={this.startGame}>Start Game</button>
          }
        </div>
            {losingState &&
              <button className="start-btn" onClick={this.refreshFunction}>Play Again?</button>
            }
            <div id="board-container">
                  <div className="w3-animate-opacity" id="gameboard">
                  {gameBoard}
                </div>
            </div>
        </div>

      );
    }
  }


export default Board
