import { useNavigate, useParams } from "react-router-dom"
import { todo } from "../models/todo-item"
import { useEffect, useState } from "react"

interface ComponentProps {
  todos: todo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<todo>()

  useEffect(() => {
    const searchTodo = todos.find((todo) => String(todo.id) === id)
    if (searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate("/404")
    }
  }, [todos, id, navigate])

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  )
}
