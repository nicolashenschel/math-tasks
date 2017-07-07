import React from 'react'
import './simplearithmeticalproblem.css'
import './w3.css'
// import ProgressBar from './progressbar'

class SimpleArithmeticalProblem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value1: randomNumber(),
      value2: randomNumber(),
      value: '',
      answeredQuestions: 0,
      numberOfQuestions: 3
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewTask = this.handleNewTask.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleNewTask (event) {
    this.setState({value: ''})
    this.setState({value1: randomNumber()})
    this.setState({value2: randomNumber()})
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
    let procentCompleted = Math.round(this.state.answeredQuestions / this.state.numberOfQuestions * 100) + '%'
    let myStyle = { width: procentCompleted }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        Opgave:
          <table>
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
          <input type="submit" value="Resultat" />
        </form>
        <input type="button" onClick={this.handleNewTask} value="Ny opgave" />
        {/* <ProgressBar /> */}
        <div className="w3-light-grey w3-round-xlarge">
          <div className="w3-container w3-blue w3-round-xlarge" style={myStyle}>{procentCompleted}</div>
        </div>
      </div>
    )
  }
}

function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomNumber () {
  return randomIntFromInterval(1, 10)
}

export default SimpleArithmeticalProblem
