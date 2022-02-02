import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

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

export const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  bottom: 0px;
  z-index: 1;
  background: #363636;
  flex-direction: column;
`;

export const SuccessfulPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #363636;
  border-radius: 600px;
`;

export const SucessfulIcon = styled(AiFillCheckCircle)`
  width: 200px;
  height: 200px;
`;

export const SuccessfulMessage = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: white;
  margin: 2vh;
  text-align: center;
`;

export const GoBackContainer = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;
  width: 30vw;

  margin-top: 2vh;

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

export const Label = styled.a`
  font-size: 25px;
  color: white;
`;
