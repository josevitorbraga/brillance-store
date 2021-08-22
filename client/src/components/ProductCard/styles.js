import styled from "styled-components";

export const Container = styled.div`
  width: 14rem;
  height: 20rem;

  margin: 0.5rem;

  display: flex;
  flex-direction: column;

  img {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);

    height: 165px;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  a svg {
    margin-top: 1rem;
    color: #52514f;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #000;
  }
`;
