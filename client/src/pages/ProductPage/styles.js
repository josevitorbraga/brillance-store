import styled from "styled-components";

export const Header = styled.div`
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #000;
    font-weight: 700;

    &:hover {
      color: #dfccca;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 5rem 0;
`;
export const Data = styled.div`
  p {
    color: #c99b95;
  }
`;
export const ImageContainer = styled.div`
  margin-right: 4rem;
  img {
    height: 30rem;
  }
`;
