import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const OrderContainer = styled.div`
  width: 40%;

  & div + div {
    margin-top: 10px;
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
    background-color: #4bb543;
    color: #fff;
    font-weight: 700;
    border-radius: 4px;
    letter-spacing: 3px;
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
`;
