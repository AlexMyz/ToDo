import { ListItem } from "../components/ListItem/ListItem"
import { todo } from "../models/todo-item"

interface ComponentProps {
  todos: todo[]
}

export const HomePage = ({todos}: ComponentProps) => {
  return (
    <div className="container">
      {
        todos.map((todo: todo) => {
          return <ListItem todo={todo} key={todo.id} />
        })
      }
    </div>
  )
}