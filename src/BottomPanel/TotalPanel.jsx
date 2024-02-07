import React from 'react'
import { TodoContext } from '../TodoContext';

const TotalPanel = () => {
  const {todos} = React.useContext(TodoContext);
  return (
    <div className='text-2xl'>TOTAL = {todos.total} $R</div>
  )
}

export {TotalPanel};