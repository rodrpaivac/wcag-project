import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  background: white;
  margin-top: 2.5vw;
  color: black;
  border-top: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    height: 150px;
  }
`;

export const FooterDiv = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 1580px) {
    width: 68%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 10px;
`;
export const Div = styled.div`
  &.logo {
    width: 300px;
  }
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;

  color: ${(props) =>
    props.solid ? "var(--color-white)" : "var(--color-blue)"};
  background: ${(props) =>
    props.solid ? "var(--color-blue)" : "var(--color-white)"};
  border: none;

  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Icons = styled.div`
  .icon {
    width: 42px;
    height: 28px;
    cursor: pointer;

    &:hover {
      padding: 1px;
    }
  }
`;
