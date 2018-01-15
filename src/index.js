import React from 'react'
import ReactDOM from 'react-dom'

import SimpleArithmeticalProblem from './simplearithmeticalproblem'

class MathPlayGround extends React.Component {
  render () {
    return (
      <div>
        <SimpleArithmeticalProblem name="Nicolas"/>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <MathPlayGround />,
  document.getElementById('root')
)
