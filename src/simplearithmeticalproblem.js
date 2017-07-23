import React from 'react'
import DropDown from './dropdown'
import './simplearithmeticalproblem.css'
import './w3.css'

class SimpleArithmeticalProblem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      maxValue: 8,
      value1: randomNumber(8),
      value2: randomNumber(8),
      value: '',
      answeredQuestions: 0,
      numberOfQuestions: 10
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewTask = this.handleNewTask.bind(this)
    this.handleLevelChange = this.handleLevelChange.bind(this)
  }

  randomNumber () {
    return randomNumber(this.state.maxValue)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleNewTask (event) {
    this.setState({value: ''})
    this.setState({value1: this.randomNumber()})
    this.setState({value2: this.randomNumber()})
  }

  handleLevelChange (event) {
    this.setState({maxValue: parseInt(event.target.value, 10)})
  }

  handleSubmit (event) {
    // todo: why is === not working?
    if (this.state.value1 + this.state.value2 == this.state.value) {
      if (this.state.answeredQuestions + 1 === this.state.numberOfQuestions) {
        this.setState({answeredQuestions: 0})
        alert('Flot!')
      } else {
        this.setState({answeredQuestions: this.state.answeredQuestions + 1})
      }
      this.handleNewTask(event)
    }
    event.preventDefault()
  }

  render () {
    let procentCompleted =  this.state.numberOfQuestions + '/' + this.state.answeredQuestions
    let myStyle = { width: Math.round(this.state.answeredQuestions / this.state.numberOfQuestions * 100) + '%' }
    return (
      <div>
            <h1>Hej {this.props.name}!</h1>
	    <h2>Opgave</h2>
            <form onSubmit={this.handleSubmit}>
          <table id="rcorners2">
            <tbody>
              <tr>
                <td></td>
                <td>{this.state.value1}</td>
              </tr>
              <tr>
                <td>+</td>
                <td>{this.state.value2}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input className="SimpleArithmeticalProblemInput" pattern="[0-9]*" type="text" value={this.state.value} onChange={this.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <input className="button" type="submit" value="Resultat" />
          <input className="button button2" type="button" onClick={this.handleNewTask} value="Ny opgave" />
        </form>
        <div className="w3-light-grey w3-round-xlarge">
          <div className="w3-container w3-blue w3-round-xlarge" style={myStyle}>{procentCompleted}</div>
            </div>
	    <DropDown onChange={this.handleLevelChange}/>
      </div>
    )
  }
}

function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomNumber (max) {
  return randomIntFromInterval(1, max)
}

export default SimpleArithmeticalProblem
