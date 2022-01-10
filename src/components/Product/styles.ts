import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 5px;

  #searchBox {
    display: flex;
    align-items: center;
    justify-content: end;

    > i {
      margin-right: 12px;
      position: absolute;
      color: var(--color-blue);
    }
  }

  #searchInput {
    width: 300px;
    padding: 10px;
    padding-right: 40px;
    background: #fff;
    border-radius: 8px;
  }

  > #userInfos {
    display: flex;
    gap: 10px;

    > button {
      cursor: pointer;

      &:hover {
        background: transparent;
      }
    }
  }

  > div > button {
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    color: var(--color-blue);
    border-radius: 8px;
  }
`;

export const Panel = styled.div`
  margin-top: 50px;

  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65fr 35fr;

  border-radius: 4px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    display: flex;
    margin-top: 80px;
  }
`;

export const Column = styled.div`
  &:first-child {
  }
`;

export const Gallery = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 73%;
  }
`;

export const Section = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 5px;
  margin: 10px;
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 16px;
    }

    .title {
      font-size: 16px;
      color: var(--color-black);
    }

    .description {
      margin-top: 5px;
      font-size: 14px;
      color: var(--color-gray);
      line-height: 19px;
    }
  }

  > a {
    margin-top: 20px;
    font-size: 14px;
    color: var(--color-blue);
    text-decoration: none;
  }
`;

export const Description = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 44px 32px;

  margin-top: 200px;

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  > p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;
  }
`;

export const SeeMore = styled.button`
  color: var(--color-blue);
  font-size: 13px;
  padding: 5px 0px;
  border: 2px solid transparent;
  border-radius: 4px;
  text-align: left;
  margin-top: 1vh;

  :hover {
    border: 2px solid #474424;
    cursor: pointer;
  }
`;
