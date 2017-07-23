import React from 'react'
import './w3.css'

class DropDown extends React.Component {
    render () {
	return (
            <div className="w3-dropdown-click">
            <select className="w3-button w3-bar-block w3-border w3-dropdown-hover" onChange={this.props.onChange}>
            <option className="w3-dropdown-click" value="8" >Tal: 1-8</option>
            <option className="w3-dropdown-click" value="10">Tal: 1-10</option>
            <option className="w3-dropdown-click" value="15">Tal: 1-15</option>
            <option className="w3-dropdown-click" value="20">Tal: 1-20</option>
            </select>
            </div>
	)
    }
}

export default DropDown
