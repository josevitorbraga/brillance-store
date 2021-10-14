import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-weight: 300;
    border-bottom: 1px solid #e2e2e2;
    padding: 0.4em 5em;
    margin: 2em 0;
  }

  .orderSummary {
    display: flex;
    align-items: center;
    margin-bottom: 1em;

    span.success {
      background-color: #4bb543;
      color: #fff;
      padding: 0.2em 0.5em;
      border-radius: 50%;
    }
    span.warn {
      background-color: #ffcc00;
      color: #fff;
      padding: 0.2em 0.5em;
      border-radius: 50%;
    }

    & div + div {
      margin-left: 3em;
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 1em;

  a {
    display: flex;
    align-items: center;

    font-weight: 700;
    text-decoration: none;
    color: #383838;

    background-color: #ffcc00;
    box-shadow: 4px 4px 8px #402d2b;
    padding: 1em;
    border-radius: 3px;
  }

  td {
    padding: 1em 1em;

    span {
      color: #fff;
      background-color: #4bb543;
      padding: 1em;
      border-radius: 50%;
      border: 3px solid #000;
    }
  }
`;

export const TableHeader = styled.th``;

export const Row = styled.tr`
  background-color: ${props => (props.header ? "#000" : "#f2e9e9")};
  color: ${props => (props.header ? "#f8f8f8" : "#000")};
  font-size: ${props => (props.header ? "1.3em" : "0.8em")};

  &:nth-child(even) {
    background-color: #dfccca;
  }

  & td + td {
    border-left: 1px solid;
  }
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: center;

  //border-bottom: 1px solid #e2e2e2;
  margin: 0 30%;
  margin-bottom: 3em;

  a {
    color: #000;
    text-decoration: none;
  }

  h2 {
    font-weight: 300;
    padding: 0.4em 0.7em;
    margin: 0;
  }

  .selected {
    color: #e2e2e2;
  }
`;
