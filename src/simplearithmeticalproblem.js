import React from 'react'
import './simplearithmeticalproblem.css'

function MathLabel (props) {
  return (
    <div className="mathlabel">
      {props.value}
    </div>
  )
}

class SimpleArithmeticalProblem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value1: 10,
      value2: 5
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    const value = this.state.value1 + this.state.value2
    const result = value == this.state.value ? 'Rigtigt' : 'Forkert'

    alert(result)
    event.preventDefault()
  }

  render () {
    return (
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
              <input className="SimpleArithmeticalProblemInput" type="text" value={this.state.value} onChange={this.handleChange} />
            </td>
          </tr>
        </table>
        <input type="submit" value="Resultat" />
      </form>
    )
  }
}
export default SimpleArithmeticalProblem