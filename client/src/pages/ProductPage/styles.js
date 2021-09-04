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

    span {
      color: #fff;
      background-color: #4bb543;
      border-radius: 20%;
      padding: 3px 8px;
      margin-left: 10px;
    }

    &:hover {
      color: #dfccca;
    }
  }

  @media (max-width: 800px) {
    margin: 1em 5%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 5em 0;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    margin: 3em 0;
  }
`;

export const Data = styled.div`
  h1 {
    word-break: break-word;
  }
  p {
    color: #c99b95;
    word-break: break-word;
  }
  button {
    background: #a5bf78;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    filter: drop-shadow(5px 15px 15px #c99b95);

    &:hover {
      background: #cee6a5;
    }
  }

  @media (max-width: 800px) {
  }
`;

export const ImageContainer = styled.div`
  margin-right: 4rem;
  img {
    height: 30rem;
  }

  @media (max-width: 600px) {
    margin-right: 0;
    img {
      height: 30rem;
    }
  }
`;
