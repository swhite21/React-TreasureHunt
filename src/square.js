import React from 'react';
import './App.css';


class Square extends React.Component{
  constructor(props){
    super(props)
    this.state={
      squareStyle: {
        background: "",
      }

    }

    }
    onclickchange =()=>{
        let { squareStyle }=this.state
        const {playerWin, winningBool, playerAttempt, playerTries, refreshFunction}=this.props
      if (winningBool === 1){
        this.setState({squareStyle:{
        background: "green"
        }})

        function WinAlert(){
          return alert("Oh god... you found my Treasure!")
        }
      playerWin()
      WinAlert()
      refreshFunction()


      }else{
        playerAttempt()
        this.setState({squareStyle:{
        background: "red"
        }})
        console.log(`onclickchange function ran ${winningBool} player has ${playerTries} lives`);
      }

      return
    }
    render(){
      let { squareStyle }=this.state
      return(
        <button style={squareStyle} onClick={this.onclickchange} className="square-style w3-animate-right">
        <h1>?</h1>
        </button>
      );
    }
  }


export default Square
