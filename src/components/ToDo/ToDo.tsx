import './ToDo.scss'
import { ToDoItem } from "./ToDoItem/ToDoItem"

export const ToDo = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <ToDoItem />
      </ul>
      <ul className="todo-list completed">
        <ToDoItem />
      </ul>
    </div>
  )
}