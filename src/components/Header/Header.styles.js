import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  svg {
    width: 100px;
  }
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

export const LogoImg = styled.div`
  svg {
    width: 200px;

    @media screen and (max-width: 500px) {
      width: 150px;
    }
  }
`;
