import React from 'react'
import ReactDOM from 'react-dom'
// import NameForm from './nameform.js'
// import EssayForm from './essayform.js'
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
