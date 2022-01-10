import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background: var(--color-header);

  border-bottom: 1px solid var(--color-border);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderDiv = styled.div`
  width: 100%;

  background: var(--color-header);

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid #d5d5d5;

  padding: 8px;
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
  margin-top: 2vh;
`;

export const SearchContainer = styled.div`
  width: 50vw;
  background: white;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 1vw 0px 1vw 1vw;
  border-radius: 2px;
  box-shadow: 1px 1px 3px #bdbdbd;
`;

export const IconContainer = styled.button`
  border-left: 2px solid #e6e6e6;
  display: flex;
  padding: 0px 10px;
  align-items: center;

  :hover {
    border: 2px solid #474424;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const Icon = styled.img`
  width: ${(props) => props.width}px;
  align-self: center;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 45vw;
`;

export const LeftContainer = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 20px;
`;

export const EnderecoContainer = styled.button`
  display: flex;
  flex-direction: row;
  border: 2px solid transparent;
  text-align: left;
  padding: 5px 10px;
  border-radius: 8px;
  :hover {
    border: 2px solid #474424;
    cursor: pointer;
  }
`;

export const Label = styled.a`
  color: #7e7839;
  font-size: 12px;
`;

export const Value = styled.a`
  color: #000;
  font-size: 14px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 20px;
`;

export const TransparentButton = styled.button`
  padding: 0.5vw 1.5vw;
  border: 2px solid transparent;
  border-radius: 4px;
  display: flex;
  align-items: center;

  margin-top: 10vh;

  :hover {
    border: 2px solid #474424;
    cursor: pointer;
  }
`;
