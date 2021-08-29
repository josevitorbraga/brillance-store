import styled from "styled-components";

export const ScrolledHeader = styled.div`
  .contentHeader {
    z-index: 2;
    padding: 1rem 2rem 0 2rem;

    align-items: center;
    justify-content: space-between;

    position: ${props => (props.isOnTop === true ? "static" : "fixed")};
    display: ${props => (props.isOnTop === true ? "none" : "flex")};
    width: ${props => (props.isOnTop === true ? "" : "100%")};
    top: ${props => (props.isOnTop === true ? "" : 0)};
    left: ${props => (props.isOnTop === true ? "" : 0)};
    background-color: ${props => (props.isOnTop === true ? "" : "#c99b95")};
    filter: ${props =>
      props.isOnTop === true
        ? ""
        : "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"};

    img {
      display: ${props => (props.isOnTop === true ? "none" : "")};
      position: ${props => (props.isOnTop === true ? "none" : "relative")};
      height: 5rem;
      width: 15rem;
      bottom: 10px;
      //margin-left: 8rem;
    }
    .cart {
      a {
        margin-bottom: 10px;
        color: #f8f8f8;
        display: flex;
        align-items: center;
        text-decoration: none;
        h2 {
          margin: 0;
          font-weight: 300;
        }
      }
    }
  }
  @media (max-width: 414px) {
    .contentHeader {
      padding: 1em 1em 0 1em;

      h2 {
        font-size: 1em;
      }

      img {
        width: 12em;
      }
      .cart {
        a {
          margin-bottom: 10px;
          color: #f8f8f8;
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        svg {
          height: 1em;
        }
      }
    }
  }
`;
