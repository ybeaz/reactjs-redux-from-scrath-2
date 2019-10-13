import React, { useState } from 'react'

export const Hello = (props) => {

  const { reduxStateVal, handleActions, children, addition, addition2, addition3 } = props

  const [inpVal, setInpVal] = useState('')

  const getFirstRowOutput = (val, addition) => {

    console.info('Hello [F]', { reduxStateVal, val, addition })
    // val.length  < 5 || val !== addition ? addition : val
    return typeof val === 'undefined' || val.length  < 5 || val === addition ? addition : val
  }

  const handleEvents = val => {
    setInpVal(val)
    handleActions(val)
    // console.info('Hello [E]', { val })
  }
 
  const firstRowOutput = getFirstRowOutput(reduxStateVal, addition)

  return <div>
    <h2>{children}</h2>
    <div>{firstRowOutput}</div>
    <div>{addition2}</div>
    <div>{addition3}</div>
    <br /><br />
    <input
      type='text'
      className='Hello__input'
      onChange={e => handleEvents(e.target.value)}
      value={inpVal}
    />
    <br /><br />
    <div>{inpVal}</div>
  </div>
}