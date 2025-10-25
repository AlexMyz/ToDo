import { todo } from '../../../models/todo-item'
import { ToDoItemBlock, ToDoItemButton, ToDoItemControls, ToDoItemText } from "./ToDoItem.styled"
import chekIcon from '../../../assets/images/check.png'
import unchekIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'  

export const ToDoItem = (props: {
  item: todo
  updateTodo: Function
  deleteTodo: Function
}) => {
  return (
    <ToDoItemBlock>
      <ToDoItemText>{props.item.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemButton
          icon={trashIcon}
          onClick={() => props.deleteTodo(props.item)}
        ></ToDoItemButton>
        <ToDoItemButton
          icon={props.item.isDone ? chekIcon : unchekIcon}
          onClick={() => props.updateTodo(props.item)}
        ></ToDoItemButton>
      </ToDoItemControls>
    </ToDoItemBlock>
  )
}