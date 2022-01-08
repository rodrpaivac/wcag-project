import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--color-header);

  border-bottom: 1px solid var(--color-border);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 80px;
  background: var(--color-header);

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid #d5d5d5;

  padding-bottom: 8px;
  @media screen and (max-width: 1280px) {
    justify-content: space-between;
    padding: 0px 30px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 10px;
`;
export const Div = styled.div`
  display: flex;
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

export const Logo = styled.img`
  width: 165px;
`;

export const SearchContainer = styled.div`
  width: 50vw;
  background: white;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px 15px 15px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px #bdbdbd;
`;

export const IconContainer = styled.div`
  border-left: 1.5px solid #e6e6e6;
  display: flex;
  padding: 0px 10px;
  align-items: center;
`;

export const SearchIcon = styled.img`
  width: 25px;
  align-self: center;
`;

export const Input = styled.input`
  font-size: 18px;
  width: 45vw;
`;
