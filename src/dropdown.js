import React from 'react'
import './w3.css'

class DropDown extends React.Component {
  render () {
    let options = []

    options.push(<option className="w3-dropdown-click" value="1" >{this.props.elements[1]}</option>)

    for (var i = 0; i < this.props.elements.length; i++) {
      options.push(<option className="w3-dropdown-click" value={i} >{this.props.elements[i]}</option>)
    }
    return (
      <div className="w3-dropdown-click">
        <select className="w3-button w3-bar-block w3-border w3-dropdown-hover" onChange={this.props.onChange}>
          {options}
        </select>
      </div>
    )
  }
}

export default DropDown
