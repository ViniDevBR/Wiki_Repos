import { ItemContainer } from "./styles";

interface ItemProps {
  name: string
  full_name: string
  url: string
  tech: string
  onClick: VoidFunction
}

export function ItemRepo(props: ItemProps) {
  return(
    <ItemContainer>
      <h3>{props.name}</h3>
      <p>{props.full_name}</p>
      <div className="container">
        <div className="link">
          <a className="SeeRepo" href={props.url} target='_blank'>See Repo</a>
          <a onClick={props.onClick} className="Remove" href="#">Remove</a>
        </div>
        
        <div className="Tecnologia">
          <h4>Top Tech: <span className="tech">{props.tech}</span></h4>
        </div>
      </div>
      <hr />
    </ItemContainer>

  )
}