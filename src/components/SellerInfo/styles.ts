import styled, { css } from "styled-components";
import {
  HiOutlineLocationMarker,
  HiChatAlt2,
  HiOutlineClock,
} from "react-icons/hi";

export const Container = styled.div`
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  margin: 10px;
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const Seller = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 20px;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  > div > a {
    font-size: 15px;
    text-decoration: none;
    color: var(--color-black);
  }

  > div > span {
    font-size: 14px;
    font-weight: normal;
    color: var(--color-gray);
  }
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }

    > strong {
      font-size: 14px;
      font-weight: normal;
      color: var(--color-gray);
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const ReputationCard = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReputationThermometer = styled.ol`
  list-style: none;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 7px;
  padding: 0 4px;
  align-items: center;

  > li {
    width: 100%;
    height: 5px;

    &:nth-child(1) {
      background: var(--reputation-1);
    }
    &:nth-child(2) {
      background: var(--reputation-2);
    }
    &:nth-child(3) {
      background: var(--reputation-3);
    }
    &:nth-child(4) {
      background: var(--reputation-4);
    }
    &:nth-child(5) {
      background: var(--reputation-5);
    }

    &.active {
      height: 10px;
    }
  }
`;

export const ReputationRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > strong {
      font-size: 24px;
      font-weight: normal;
      height: 30px;
    }

    > span {
      font-size: 12px;
    }

    position: relative;

    & + div {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 36px;
        border-left: 1px solid var(--color-border);
      }
    }
  }
`;

export const SupportIcon = styled(HiChatAlt2)`
  ${iconCSS}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCSS}
`;

export const More = styled.a`
  margin-top: 24px;
  color: var(--color-blue);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;

export const SeeMore = styled.button`
  color: var(--color-blue);
  font-size: 13px;
  padding: 5px 0px;
  border: 2px solid transparent;
  border-radius: 4px;
  margin-top: 1vh;
  text-align: left;

  :hover {
    border: 2px solid black;
    cursor: pointer;
  }
`;