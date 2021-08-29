import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  width: 100%;
  text-align: right;

  > h3 {
    margin-right: 7rem;
    font-weight: 700;
    font-size: 1.4rem;
  }

  .products-grid {
    display: flex;
    flex-wrap: wrap;
    border: solid 1px #e2e2e2;
    align-content: flex-start;

    margin-right: 6rem;
    margin-left: 16rem;
    padding-left: 0.2rem;
    img {
      height: 215px;
    }
  }
`;
