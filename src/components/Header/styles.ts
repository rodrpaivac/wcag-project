import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-header);

  border-bottom: 1px solid var(--color-border);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 100%;

  background: var(--color-header);

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid #d5d5d5;

  padding: 8px;
  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    padding: 0px 30px;
    flex-direction: column;
    height: 260px;
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
  margin-bottom: 1px;
  margin-left: 15px;
  @media screen and (max-width: 1000px) {
    width: 135px;
    margin-top: 15px;
  }

  &:hover {
    border: 2px solid #474424;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const SearchContainer = styled.div`
  width: 500px;
  background: white;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px 5px 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px #bdbdbd;

  @media screen and (max-width: 1000px) {
    width: 300px;
  }
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

  @media screen and (max-width: 1000px) {
    padding: 0px 3px;
  }
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 30px;
  color: #474424;
  align-self: center;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 35px;
  height: 35px;
  color: gray;

  align-self: center;

  @media screen and (max-width: 1000px) {
    padding: 0px 3px;
  }
`;

export const LocationIcon = styled(GrLocation)`
  width: 30px;
  height: 30px;
  margin-right: 0.5vw;
  color: #474424;

  align-self: center;
  @media screen and (max-width: 1000px) {
    width: 25px;
    height: 25px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  width: 450px;
  @media screen and (max-width: 1000px) {
    font-size: 12px;
    width: 230px;
  }
`;

export const LeftContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

export const EnderecoContainer = styled.button`
  display: flex;
  flex-direction: row;
  border: 2px solid transparent;
  text-align: left;
  padding: 5px 10px;
  border-radius: 8px;

  margin-top: 20px;

  :hover {
    border: 2px solid #474424;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 5px;
  }
`;

export const Label = styled.p`
  color: #54502b;
  font-size: 110%;
`;

export const Value = styled.p`
  color: #000;
  font-size: 110%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 5px;
  @media screen and (max-width: 1000px) {
    margin-top: 0px;
  }
`;

export const TransparentButton = styled.button`
  padding: 2px 15px;
  border: 2px solid transparent;
  border-radius: 4px;
  display: flex;
  align-items: center;
  min-height: 44px;

  margin: 100px 12px;
  margin-bottom: 0px;
  :hover {
    border: 2px solid #474424;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    margin: 0px 10px;
  }
`;
