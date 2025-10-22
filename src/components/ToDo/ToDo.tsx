import "./ToDo.scss"
import { ToDoItem } from "./ToDoItem/ToDoItem"
import { todo } from "../../models/todo-item"

export const ToDo = (props: { todos: todo[], updateTodo: Function, deleteTodo: Function }) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoItem
            item={item}
            key={idx}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        )
      })
  }

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoItem
            item={item}
            key={idx}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        )
      })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{checkedList()}</ul>
      <ul className="todo-list completed">{unCheckedList()}</ul>
    </div>
  )
}
