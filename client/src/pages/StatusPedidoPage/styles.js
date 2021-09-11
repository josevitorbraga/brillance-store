import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 4.3em;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loadingIcon {
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.5em;
      animation: spin 1s linear infinite;
    }
  }
`;

export const ResponseBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //margin: 3em 0;

  background-color: #f8f8f8;
  filter: drop-shadow(5px 15px 15px #c99b95);

  border-radius: 2em;

  padding: 1em;

  .responseText {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1em 0;
    h1 {
      margin-top: 0;
    }

    h3 {
      margin-bottom: 0;
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2em;
      color: #fff;
      text-decoration: none;
      background-color: #c99b95;
      padding: 1em;
      border-radius: 1em;
    }
    a:hover {
      background-color: #000;
    }
  }
`;

export const StatusIcon = styled.div`
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: ${props => (props.status === "success" ? "#7ac142" : "#c9211e")};
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: ${props =>
      props.status === "success"
        ? "inset 0px 0px 0px  #7ac142"
        : "inset 0px 0px 0px  #c9211e"};
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @keyframes fill {
    100% {
      box-shadow: ${props =>
        props.status === "success"
          ? "inset 0px 0px 0px 30px #7ac142"
          : "inset 0px 0px 0px 30px #c9211e"};
    }
  }
`;
