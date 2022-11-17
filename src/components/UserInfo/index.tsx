import { InfoContainer } from "./styles"

interface Props {
  img: string
  onClick: string
}

export function UserInfo(props: Props) {
  return(
    <InfoContainer href={props.onClick} target='_blank'>
      <img src={props.img} alt="Foto do dono do repositorio" />
    </InfoContainer>       
  )
}