import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick: () => Promise<void>
}

export function Button(props: ButtonProps) {
  return(
    <ButtonContainer onClick={props.onClick}>
      Search
    </ButtonContainer>
  )
}