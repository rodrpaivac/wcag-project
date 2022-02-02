import styled from "styled-components";

export const Container = styled.button`
  border-radius: 600px;
  border: 2px solid #474424;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 35px;
  height: 35px;
  box-shadow: 0px 2px 10px #cfcfcf;

  &:hover {
    border: 3px dashed black;
    cursor: pointer;
  }
`;

export const RadioBoxSelected = styled.div`
  border-radius: 600px;
  background: var(--color-blue);
  width: 15px;
  height: 15px;
`;
