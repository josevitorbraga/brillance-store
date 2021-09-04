import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1;
  text-align: center;
  margin: 1em 5em;

  > h1 {
    font-weight: 300;
    border-bottom: 1px solid #e2e2e2;
  }

  .products-grid {
    display: flex;
    flex-wrap: wrap;
    //border: solid 1px #e2e2e2;
    border-radius: 1em;
    background-color: #fbfbfb;
    filter: drop-shadow(5px 15px 15px #c99b95);

    align-content: center;
    justify-content: center;

    padding-top: 2em;
  }

  @media (max-width: 800px) {
    margin: 0;

    .products-grid {
      margin-right: 0;
      margin-left: 0;
      padding-left: 0;
    }
  }
`;
