import { Form } from "../components/Form/Form"
import { ToDo } from "../components/ToDo/ToDo"
import { todo } from "../models/todo-item"
import { ToastContainer, toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { createAction, deleteAction, updateAction } from "../features/todoList"

export const ToD0ListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()

  const createNewTodo = (text: string) => {
    dispatch(createAction(text))
    toast("task added")
  }

  const updateTodo = (item: todo) => {
    dispatch(updateAction(item))
    toast("task completed")
  }

  const deleteTodo = (item: todo) => {
    dispatch(deleteAction(item))
    toast("task deleted")
  }

  return (
    <>
      <Form createNewTodo={createNewTodo} />
      <ToDo todos={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <ToastContainer position="bottom-right" />
    </>
  )
}
