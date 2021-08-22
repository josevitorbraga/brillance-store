import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginInfo {
    padding: 2rem;
    border-right: solid 1px #e2e2e2;
    margin-right: 2rem;
  }
`;
export const Content = styled.div`
  form {
    min-width: 30rem;
    display: flex;
    flex-direction: column;
    button {
      padding: 0.8rem;
      margin-top: 1rem;
      font-weight: 700;
      font-size: 1rem;
      color: #f8f8f8;
      background-color: #c99b95;
    }
  }
`;
