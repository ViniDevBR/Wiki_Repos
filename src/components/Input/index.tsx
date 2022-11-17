import { ChangeEvent, ChangeEventHandler } from "react";
import { InputContainer } from "./styles";

interface Props {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
export function Input(props: Props) {
  return(
    <InputContainer>
      <input 
        value={props.value} 
        onChange={props.onChange}
        placeholder='username/repo'
      />
    </InputContainer>
  )
}