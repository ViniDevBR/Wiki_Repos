import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0 0 0;
  margin: auto;

  @media (min-width: 1000px) {
    width: 80%;
  }
`