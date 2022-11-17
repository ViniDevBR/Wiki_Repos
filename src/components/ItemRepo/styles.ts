import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 85%;
  
  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a {
    color: #f00;
  }
  .SeeRepo {
    color: #fff;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .link {
      display: flex;
      flex-direction: column;
    }
  }

  hr {
    color: #fafafa60;
    margin: 10px 0;
  }
`