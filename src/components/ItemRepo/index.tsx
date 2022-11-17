import { UserInfo } from "../UserInfo";
import { ItemContainer, NameContainer, LinksContainer } from "./styles";

interface ItemProps {
  name: string
  full_name: string
  url: string
  tech: string
  onClick: VoidFunction
  profile: string
  img: string
}

export function ItemRepo(props: ItemProps) {
  return(
    <ItemContainer>
      <NameContainer>
        <div>
          <h3>{props.name}</h3>
          <p>{props.full_name}</p>
        </div>
        <UserInfo onClick={props.profile} img={props.img} />
      </NameContainer>

      <LinksContainer>
        <div className="link">
          <a className="SeeRepo" href={props.url} target='_blank'>See Repo</a>
          <a onClick={props.onClick} className="Remove" href="#">Remove</a>
        </div>
        
        <div className="Tecnologia">
          <h4>Top Tech: <span className="tech">{props.tech}</span></h4>
        </div>
      </LinksContainer>
      <hr />
    </ItemContainer>

  )
}