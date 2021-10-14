import styled from "styled-components";

export const MissingAuth = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 1px solid #e2e2e2;
  margin: 0 30%;

  a {
    color: #000;
    text-decoration: none;
  }
  a :hover {
    font-size: 700;
  }

  h2 {
    font-weight: 300;
    padding: 0.4em 0.7em;
    margin: 0;
  }

  .selected {
    color: #e2e2e2;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1em;

  .info {
    font-weight: 300;
    font-size: 2rem;
    background-color: #c99b95;
    color: #fff;

    padding: 2rem 0;
    border-bottom: 1px solid #eaecef;

    display: flex;
    justify-content: center;

    margin-bottom: 2rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 6rem;

    a {
      padding: 1rem;
      border: 1px solid;
      border-radius: 3px;

      text-decoration: none;

      background-color: #c99b95;
      color: #fff;

      &:hover {
        background-color: #dfccca;
        color: #595757;
      }
    }
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: solid 1px #e2e2e2;
  background-color: #fbfbfb;
  filter: drop-shadow(5px 15px 15px #c99b95);

  align-content: flex-start;
  justify-content: center;

  margin: 2rem 6rem;
  padding-left: 0.2rem;

  img {
    height: 190px;
  }
`;
