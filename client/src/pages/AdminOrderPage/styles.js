import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Details = styled.div`
  border: 40px solid #f5e9a4;

  background: linear-gradient(
    to bottom,
    #f5e9a4,
    #f5e9a4 80%,
    #ede2a4 80%,
    #ede2a4
  );
  background-size: 100% 20px;

  label {
    color: #6e6e6e;
    text-decoration: underline;
  }

  span {
    font-size: 1.4em;
    margin-left: 1em;
  }

  .detailsBox {
    margin: 1em 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1em;
  padding: 0 2em 2em 2em;
  border-radius: 1em;

  background: #a5bf78;
  box-shadow: inset -3px -4px 5px #72874e;

  p {
    font-weight: 300;
  }

  .shippingForm {
    input {
      width: 100%;
      padding: 0.6em;
    }
    button {
      width: 100%;
      padding: 0.7em;
      margin-top: 0.6em;
    }
  }
`;
