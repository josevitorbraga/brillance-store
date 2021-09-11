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
    margin: 1.5em 0;
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
    padding: 0.5em 1em;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    filter: drop-shadow(5px 15px 15px #c99b95);

    &:hover {
      background: #cee6a5;
    }
  }

  @media (max-width: 800px) {
    background-color: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2em 3em;
    margin: 0 1.3em;

    filter: drop-shadow(5px 15px 15px #c99b95);
    border-radius: 1em;

    h1,
    h2 {
      margin: 0;
    }

    p {
      margin: 0.3em 0;
    }

    button {
      margin-top: 1em;
      filter: none;
    }
  }
`;

export const ImageContainer = styled.div`
  margin-right: 4em;
  img {
    height: 30em;
    filter: drop-shadow(5px 15px 15px #c99b95);
    flex: 1;
  }

  @media (max-width: 800px) {
    margin-right: 0;
    img {
      height: 20em;
      //border-radius: 1em;
      filter: drop-shadow(5px 15px 15px #c99b95);
    }
  }
`;
