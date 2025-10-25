import { useState } from 'react'
import { FormWrapper, FormBlock, FormLabel, FormInput, FormButton } from "./Form.styled"
import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewTodo: Function}) => {
  const [text, setText] = useState<string>('')

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (text) {
      props.createNewTodo(text)
      setText('')
    }
  }

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormButton icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  )
}