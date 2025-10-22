import { useState } from 'react'
import './Form.scss'

export const Form = (props: { createNewTodo: Function}) => {
  const [text, setText] = useState<string>('')

  const formSubmit = () => {
    if (text) {
      props.createNewTodo(text)
      setText('')
    }
  }

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
          <button></button>
        </label>
      </form>
    </div>
  )
}