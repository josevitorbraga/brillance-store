import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const OrderContainer = styled.div`
  width: 55%;

  & div + div {
    margin-top: 10px;
  }

  @media (max-width: 800px) {
    .productPrice {
      display: none;
    }
  }
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;

  .orderInfo {
    display: flex;
    .productImage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        height: 55px;
        width: 50px;
      }
    }
  }
  .quantityButton {
    display: flex;
    align-items: center;

    margin: 16px 0;

    input {
      width: 40px;
    }
  }

  label {
    font-weight: 300;
  }

  p {
    font-weight: 700;
  }

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;

    svg {
      color: #ff5a5f;
    }

    &:hover {
      color: #ff5a5f;
    }
  }

  & div + div {
    margin-left: 4rem;
  }

  @media (max-width: 414px) {
    width: 96vw;

    .productPrice {
      display: none;
    }

    .orderActions {
      margin: 0;
    }

    & div + div {
      margin-left: 1.5em;
    }
  }
`;

export const OrderDetails = styled.div`
  width: 20%;
  max-height: 20rem;
  margin-left: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  color: #fff;
  background-color: #c99b95;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  border-radius: 4px;
  padding: 1rem;

  font-weight: 300;

  .orderResume {
    span {
      font-size: 1rem;
      font-weight: 700;
    }
  }
  > span {
    font-size: 2rem;
  }
  p {
    font-size: 0.8rem;
  }

  button {
    padding: 1rem;
    background-color: #a5bf78;
    color: #fff;
    font-weight: 700;
    border-radius: 4px;
    letter-spacing: 3px;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2), inset 0 -4px 0 #a5bf78,
      inset 0 3px 0 #cee6a5;
  }

  @media (max-width: 800px) {
    width: 60%;
    margin: 2em 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 3rem 2rem 3rem;

  .spacing {
    width: 127px;
  }

  a {
    display: flex;
    text-decoration: none;
    color: #000;
    font-weight: 700;

    &:hover {
      color: #dfccca;
    }

    svg {
      margin: 3px 3px 0 0;
    }
  }

  span {
    font-size: 1.5rem;
    border-bottom: 1px solid #dfccca;
    padding: 0 8rem;
    color: #595757;
  }

  @media (max-width: 800px) {
    margin: 1em 2em 3em 2em;

    .spacing {
      width: 127px;
    }

    a {
      font-size: 0.8em;
    }

    span {
      font-size: 1.5rem;
      border-bottom: 1px solid #dfccca;
      padding: 0 1.3em;
      color: #595757;
    }
  }
`;
