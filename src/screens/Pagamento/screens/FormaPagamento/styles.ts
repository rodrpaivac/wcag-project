import styled from "styled-components";
import { RiMastercardFill } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 20px;
  margin: 5vw 5vw 2vw 5vw;
  font-weight: 550;
`;

export const FormaPagamentoContainer = styled.div`
  width: 50vw;
  background: #eeeeee;
  padding: 3vw;
  margin: 1vw 6vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

export const FormaPagamentoLabel = styled.p`
  font-size: 16px;
  width: 35vw;
`;

export const IconContainer = styled.div`
  background: white;
  border-radius: 600px;
  padding: 3px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 2vw;
  box-shadow: 0px 2px 10px #cfcfcf;

  width: 60px;
  height: 60px;
`;

export const Icon = styled(RiMastercardFill)`
  width: 30px;
  height: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20vw;

  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  padding: 20px 10px;
  margin: 44px 36vw;

  color: white;
  background: var(--color-blue);
  @media screen and (max-width: 1000px) {
    width: 80vw;
    margin: 44px 7vw;
  }
  cursor: pointer;

  &:hover {
    background: #3a67c1;

    border: 2px solid #474424;
    border-radius: 4px;
  }
`;

export const VoltarButtonContainer = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;
  margin-left: 7vw;
  margin-top: -90px;
  width: 20vw;

  @media screen and (max-width: 1000px) {
    margin: 24px 7vw;
    width: 80vw;
    padding: 20px 10px;
  }
  &:hover {
    border: 2px solid #474424;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const VoltarLabel = styled.p`
  font-size: 14px;
  width: 35vw;
  color: #3a67c1;
`;

export const Buttons = styled.div``;

