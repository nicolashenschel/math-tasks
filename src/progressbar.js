import React from 'react'

class ProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 0,
      max: 10
    }
  }

  render () {
    var myStyle = { width: '25%' }
    return (
      <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-container w3-blue w3-round-xlarge" style={myStyle}>25%</div>
      </div>
    )
  }
}

export default ProgressBar
