import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { todo } from "../models/todo-item"

export interface TodoState {
  todos: todo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newTodo: todo = {
        id: state.todos.length,
        text: action.payload,
        isDone: false,
      }
      state.todos = [...state.todos, newTodo]
    },
    updateAction: (state, action: PayloadAction<todo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
      state.todos = newTodos
    },
    deleteAction: (state, action: PayloadAction<todo>) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
      state.todos = newTodos
    },
  },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer
