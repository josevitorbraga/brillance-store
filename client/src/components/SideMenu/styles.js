import styled from "styled-components";

export const SideMenuWrapper = styled.div`
  width: 15%;
  position: fixed;

  display: flex;
  flex-direction: column;

  .wrapper {
    margin-top: 3rem;
    .interactiveMenu {
      margin-bottom: 1rem;
      a {
        display: flex;
        align-items: center;

        text-decoration: none;

        color: #c99b95;
        &:hover span {
          max-width: 100%;
        }
      }

      span {
        width: auto;
        max-width: 0%;
        white-space: nowrap;
        overflow: hidden;
        transition: max-width 0.5s linear;
      }
    }
  }

  ul {
    padding: 0;
  }

  ul li a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 1.3rem;
  }

  ul li a:hover {
    font-weight: 700;
  }

  && li + li {
    margin-top: 0.5rem;
  }
  && svg + svg {
    margin-top: 0.5rem;
  }
`;

export const SideMenuList = styled.ul`
  list-style: none;
`;
