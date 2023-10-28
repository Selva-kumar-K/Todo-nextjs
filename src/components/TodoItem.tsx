"use client"
import React from 'react'

type TodoList = {
    id : string
    title : string
    complete : boolean
    toggleTodo : (id : string, complete : boolean) => void
}
const TodoItem = ({id, title, complete, toggleTodo} : TodoList) => {
  return (
    <div>
        <li className='flex gap-1 items-center'>
            <input type="checkbox" id={id} className='cursor-pointer peer' defaultChecked={complete} 
            onChange={ e => toggleTodo(id, e.target.checked)}/>
            <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
        </li>
    </div>
  )
}

export default TodoItem