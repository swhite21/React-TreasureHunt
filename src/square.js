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
        const {playerWin, winningBool, playerAttempt, refreshFunction}=this.props
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
