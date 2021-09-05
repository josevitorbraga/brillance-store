import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    border-bottom: 1px solid;
    padding: 0.2rem 20%;
    color: #b8aaa9;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    input {
      padding: 0.3rem;
    }
    textarea {
      white-space: pre-wrap;
    }
    label {
      margin-top: 1rem;
    }
    button {
      padding: 0.5rem;
      margin: 1rem 6rem;
      cursor: pointer;

      background-color: #4bb543;
      border: 1px solid;
      color: #fff;
      font-weight: 700;

      &:hover {
        background-color: #85e87d;
        color: #595757;
      }
    }
  }
`;
