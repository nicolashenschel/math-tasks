import React from 'react'
import './simplearithmeticalproblem.css'

class SimpleArithmeticalProblem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value1: 10,
      value2: 5,
      value: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewTask = this.handleNewTask.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleNewTask (event) {
    this.setState({value1: randomIntFromInterval(1, 10)})
    this.setState({value2: randomIntFromInterval(1, 10)})
  }

  handleSubmit (event) {
    // todo: why is === not working?
    const result = this.state.value1 + this.state.value2 == this.state.value ? 'Rigtigt' : 'Forkert'

    alert(result + ': ' + this.state.value)
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
                <input className="SimpleArithmeticalProblemInput" type="number" value={this.state.value} onChange={this.handleChange} />
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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default SimpleArithmeticalProblem