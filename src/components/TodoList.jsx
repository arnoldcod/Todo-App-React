import React from 'react'

export default function TododList() {
   let todos = [
    'Go to the gymn ',
    'Buy groceries',
    'Meet up with friends'
   ]


  return (
      <ul className='main'>
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard key={todoIndex}>
                 <p>{todo}</p>
            </TodoCard>
          )
        })}
      </ul>
  )
}
