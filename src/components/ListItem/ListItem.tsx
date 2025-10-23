import { NavLink } from "react-router-dom"
import { todo } from "../../models/todo-item"
import classes from './ListItem.module.scss'


export const ListItem = ({todo}: {todo: todo}) => {
  return (
    <NavLink to={`/list/${todo.id}`} className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}>
      {todo.text}
    </NavLink>
  )
}