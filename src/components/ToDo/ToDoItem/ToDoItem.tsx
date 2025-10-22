import './ToDoItem.scss'
import { todo } from '../../../models/todo-item'

export const ToDoItem = (props: {
  item: todo
  updateTodo: Function
  deleteTodo: Function
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.item.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => props.deleteTodo(props.item)}
        ></button>
        <button
          className={props.item.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => props.updateTodo(props.item)}
        ></button>
      </div>
    </li>
  )
}