import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  handlePlural = () => {
    if(this.state.count >= 1){
        if(this.state.count >1){
          return `You have pressed the button ${this.state.count} times!`    
        } else {
          return `You have pressed the button ${this.state.count} time!`
        }
    } else {
      return "Press the button, it's fun!"
    }
  }

  render() {
    console.log('I am rendering')
    return (
      <div>
        <h1>{this.handlePlural()}</h1>
        <button onClick={this.handleClick}>PRESS ME</button>
      </div>
    )
  }
}

export default App