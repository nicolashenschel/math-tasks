import React from 'react'
import './simplearithmeticalproblem.css'

class SimpleArithmeticalProblem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value1: randomNumber(),
      value2: randomNumber(),
      value: ''
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
    let result = 'Forkert'

    if (this.state.value1 + this.state.value2 == this.state.value) {
      result = 'Rigtigt'
      this.handleNewTask(event)
    }

    alert(result)
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        Opgave:
          <table>
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
          </table>
          <input type="submit" value="Resultat" />
        </form>
        {/* <button onclick={this.handleNewTask}>Ny opgave</button> */}
        <input type="button" onClick={this.handleNewTask} value="Ny opgave" />
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