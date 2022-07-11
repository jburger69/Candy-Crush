import React from 'react'

const ScoreBoard = ({score}) => {
  return (
    <>
        <div className='score'>
          <h1>ScoreBoard</h1>
          <h2>Your Score: {score}</h2>
        </div>
    </>
  )
}

export default ScoreBoard
