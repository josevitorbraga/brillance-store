import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1;
  text-align: center;
  margin: 1em 5em;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loadingIcon {
    svg {
      animation: spin 1s linear infinite;
    }
  }

  > h1 {
    font-weight: 300;
    border-bottom: 1px solid #e2e2e2;
  }

  .products-grid {
    display: flex;
    flex-wrap: wrap;
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
