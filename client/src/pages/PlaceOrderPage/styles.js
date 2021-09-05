import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1.3em;

  span {
    border-bottom: 1px solid #dfccca;
    padding: 0 3em 0.3em 3em;
    color: #595757;
  }

  p {
    font-size: 0.9em;
    color: #a8a8a8;
    text-align: center;
  }
`;

export const ShippingForm = styled.form`
  //Desktop

  width: 100%;
  padding: 0 25%;

  .sameLine {
    display: flex;
    justify-content: space-between;

    .big {
      flex: 1;
      margin-right: 1em;
    }
  }
  .formInput {
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;

    input {
      padding: 0.6em;
      border-radius: 5px;
      border: 1px solid #c2c2c2;
    }
  }

  .submitBtn {
    margin-top: 2em;
    display: flex;
    justify-content: center;

    button {
      padding: 1rem;
      background-color: #a5bf78;
      color: #fff;
      font-weight: 700;
      border-radius: 4px;
      letter-spacing: 3px;
      box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2), inset 0 -4px 0 #a5bf78,
        inset 0 3px 0 #cee6a5;
    }
  }

  // Mobile
  @media (max-width: 800px) {
    padding: 0 1em;
  }
`;
