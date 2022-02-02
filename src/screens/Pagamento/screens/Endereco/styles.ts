import styled from "styled-components";
import { GrLocation } from "react-icons/gr";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 20px;
  margin: 5vw 5vw 2vw 5vw;
  font-weight: 550;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 550;
`;

export const SelectedAddressContainer = styled.div`
  width: 50vw;
  background: #eeeeee;
  padding: 3vw;
  margin: 1vw 6vw;

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

export const AddressRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3vw;
  justify-content: space-between;
`;

export const Address = styled.p`
  font-size: 14px;
  width: 35vw;
`;

export const LocationIconContainer = styled.div`
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

export const RadioBoxContainer = styled.button`
  border-radius: 600px;
  border: 3px solid black;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 35px;
  height: 35px;
  box-shadow: 0px 2px 10px #cfcfcf;
`;

export const RadioBoxSelected = styled.div`
  border-radius: 600px;
  background: var(--color-blue);
  width: 15px;
  height: 15px;
`;

export const EditarButtonContainer = styled.button`
  margin-top: 3vw;
  padding: 15px;
  &:hover {
    border: 2px solid #474424;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const EditarButtonLabel = styled.p`
  font-size: 14px;
  color: var(--color-blue);
`;

export const LocationIcon = styled(GrLocation)`
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

export const CancelarButtonContainer = styled.button`
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

export const CancelarLabel = styled.p`
  font-size: 14px;
  width: 35vw;
  color: #3a67c1;
`;

export const Buttons = styled.div``;
