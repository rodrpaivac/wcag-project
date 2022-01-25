import styled from "styled-components";

export const Container = styled.div`
  background: #f4f4f4;
`;

export const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    display: flex;
  }
`;
