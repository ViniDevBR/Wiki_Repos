import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 1px solid #FAFAFA;
  background-color: #FAFAFA;
  border-radius: 20px;
  height: 62px;
  width: 80%;
  margin: 5px 0 20px 0;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: #FAFAFA40;
    border: 1px solid #FAFAFA40;
    color: #FAFAFA;
  }
`