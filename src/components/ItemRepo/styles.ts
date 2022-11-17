import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 85%;
  
  hr {
    color: #fafafa60;
    margin: 10px 0;
  }
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  a {
    color: #f00;
  }
  .SeeRepo {
    color: #fff;
  }

  .link {
    display: flex;
    flex-direction: column;
  }
`