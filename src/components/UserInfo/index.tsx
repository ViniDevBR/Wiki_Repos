import { InfoContainer } from "./styles"

interface Props {
  img: string
  name: string
  onClick: string
}

export function UserInfo(props: Props) {
  return(
    <InfoContainer>
      <img src={props.img} alt="" />
      <a href={props.onClick} target='_blank'>{props.name}</a>
    </InfoContainer>       
  )
}