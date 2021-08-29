import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  width: 100%;
  text-align: right;

  .products-grid {
    display: flex;
    flex-wrap: wrap;
    border: solid 1px #e2e2e2;
    align-content: center;
    justify-content: center;

    margin-right: 6rem;
    margin-left: 16rem;
    padding-left: 0.2rem;
  }

  @media (max-width: 414px) {
    .products-grid {
      margin-right: 0;
      margin-left: 0;
      padding-left: 0;
    }
  }
`;
