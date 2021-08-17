import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  width: 100%;
  text-align: right;

  .contentHeader {
    margin-right: 10rem;
    padding-top: 1.5rem;

    align-items: center;
    justify-content: space-between;

    position: ${props => (props.isOnTop === true ? "static" : "fixed")};
    display: ${props => (props.isOnTop === true ? "" : "flex")};
    width: ${props => (props.isOnTop === true ? "" : "100%")};
    top: ${props => (props.isOnTop === true ? "" : 0)};
    left: ${props => (props.isOnTop === true ? "" : 0)};
    background-color: ${props => (props.isOnTop === true ? "" : "#fbfbfb")};
    filter: ${props =>
      props.isOnTop === true
        ? ""
        : "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"};

    h1 {
      margin-top: 0;
      margin-right: ${props => (props.isOnTop === true ? 0 : "8rem")};
    }

    img {
      display: ${props => (props.isOnTop === true ? "none" : "")};
      position: ${props => (props.isOnTop === true ? "none" : "relative")};
      height: 5rem;
      width: 15rem;
      bottom: 10px;
      margin-left: 8rem;
    }
  }
  .products-grid {
    display: flex;
    flex-wrap: wrap;
    border: solid 1px #e2e2e2;
    align-content: flex-start;

    margin-right: 6rem;
    margin-left: 16rem;
    padding-left: 0.2rem;
  }
`;
