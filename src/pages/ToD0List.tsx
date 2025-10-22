import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDo } from "../components/ToDo/ToDo"
import { todo } from "../models/todo-item"
import { ToastContainer, toast } from "react-toastify"

export const ToDoList = () => {
  const [todos, setTodos] = useState<todo[]>([])

  const createNewTodo = (text: string) => {
    const newTodo: todo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    setTodos([...todos, newTodo])
    toast("task added")
  }

  const updateTodo = (item: todo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === item.id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(newTodos)
    toast("task completed")
  }

  const deleteTodo = (item: todo) => {
    const newTodos = todos.filter(todo => todo.id !== item.id)
    setTodos(newTodos)
    toast("task deleted" )
  }

  return (
    <>
      <Header />
      <Form createNewTodo={createNewTodo} />
      <ToDo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <ToastContainer position="bottom-right" />
    </>
  )
}
