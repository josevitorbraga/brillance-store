import styled from "styled-components";

export const SideMenuWrapper = styled.div`
  display: flex;

  position: fixed;
  left: 0;
  bottom: 8em;

  z-index: 1;

  border: 1px solid #d8c3c3;
  border-left: 0;
  border-radius: 0 1em 1em 0;
  filter: drop-shadow(5px 15px 15px #bfbfbf);

  transition: transform 0.7s ease;
  transform: ${props =>
    !props.isOpen ? "translateX(-75%)" : "translateX(0%)"};

  .hiddenMenu {
    padding: 1em;
    transition: width 0.7s;

    overflow: hidden;

    background-color: #f8f8f8;

    .secondMenu {
      a {
        display: flex;
        align-items: center;

        text-decoration: none;

        color: #b09e9e;
      }
      span {
        width: auto;
        max-width: ${props => (!props.isOpen ? "0" : "100%")};
        white-space: nowrap;
        overflow: hidden;
        transition: max-width 2s linear;
      }
    }
  }

  .toggleMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1em;

    background-color: #a5bf78;
    border-radius: 0 1em 1em 0;

    color: #f8f8f8;
    font-weight: 700;
  }
`;

export const SideMenuList = styled.ul`
  list-style: none;
  padding: 0;

  margin-bottom: 2em;

  li {
    padding: 0.3em;

    a {
      color: #000;
      text-decoration: none;
      font-size: 1.3em;
    }
  }
`;
