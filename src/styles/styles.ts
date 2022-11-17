import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0 0 0;
  margin: auto;

  .infos {
    padding-block: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  @media (min-width: 1000px) {
    width: 80%;

    .infos {
    padding-block: 5px;
    flex-direction: row;
    gap: 20px;
  }
  }

`