import styled from "styled-components";

export const Header = styled.div`
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #000;
    font-weight: 700;

    &:hover {
      color: #dfccca;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 5rem 0;
`;
export const Data = styled.div`
  form {
    display: flex;
    flex-direction: column;

    button {
      padding: 1rem;
      margin-top: 2rem;
      background-color: #4bb543;

      font-weight: 700;
      border-radius: 3px;

      color: #fff;

      &:hover {
        background-color: #81e67a;
        // shade that is a bit darker than the button
        color: #000;
      }
    }
  }
  .formDiv {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      font-size: 1.3rem;
      color: #c99b95;
    }
  }

  .deleteProduct {
    display: flex;
    width: 100%;
    button {
      width: 100%;
      padding: 1rem;
      margin-top: 2rem;
      background-color: #d24858;

      font-weight: 700;
      border-radius: 3px;

      color: #fff;

      &:hover {
        background-color: #ea8676;
        // shade that is a bit darker than the button
        color: #000;
      }
    }
  }
`;
export const ImageContainer = styled.div`
  margin-right: 4rem;
  img {
    height: 30rem;
  }
`;
