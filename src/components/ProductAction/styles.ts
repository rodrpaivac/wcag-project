import styled from "styled-components";
import {
  HiOutlineCheck,
  HiOutlineShieldCheck,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { RiShareForward2Fill } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  margin: 10px;
`;

export const ProductKind = styled.div`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 75%;
    font-size: 26px;
    font-weight: 600;
  }

  > div {
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 0;
  }
`;

export const FavoriteButton = styled.button`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid transparent;
  :hover {
    border: 2px solid #474424;
    cursor: pointer;
  }
`;
export const HeartIcon = styled(IoMdHeartEmpty)`
  width: 44px;
  height: 44px;

  color: var(--color-blue);

  cursor: pointer;
`;
export const ShareIcon = styled(RiShareForward2Fill)`
  width: 28px;
  height: 28px;
  color: var(--color-blue);

  margin-left: 16px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    padding: 1px;
  }
`;

export const CartIcon = styled(HiOutlineShoppingCart)`
  width: 28px;
  height: 28px;
  color: var(--color-blue);

  margin-left: 16px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    padding: 1px;
  }
`;
export const Condition = styled.div`
  margin-top: 12px;
  background: #ee7f46;
  color: var(--color-white);
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;
`;

export const PreviousPriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 22px;
  font-weight: 150;
  text-decoration: line-through;
  color: gray;
  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 10px;
    padding-top: 2px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  > div {
    display: flex;
    align-items: center;
    color: black;
    font-weight: 600;

    span {
    }
  }

  > p {
    margin-top: 5px;
    color: black;
    font-size: 14px;
  }
`;

export const DeliveryIcon = styled.div`
  display: flex;
  img {
    width: 25px;
  }
`;

export const Delivery = styled.div`
  margin-top: 18px;
  display: flex;
  margin-left: -8px;

  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .title {
      color: var(--color-green);
      font-size: 15px;
    }
    .details {
      margin-top: 5px;
      color: var(--color-gray);
      font-size: 14px;
    }
    .more {
      margin-top: 5px;
      text-decoration: none;
      color: var(--color-blue);
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const PaymentIcon = styled(MdPayment)`
  width: 24px;
  height: 24px;
  color: var(--color-green);
`;

export const MethodCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;

  #payment-title {
    display: flex;
    align-items: center;

    > span {
      margin-left: 8px;
      color: var(--color-green);
    }
  }

  .details {
    margin-top: 5px;
    color: var(--color-gray);
    font-size: 14px;
  }

  .more {
    margin-top: 5px;
    text-decoration: none;
    color: var(--color-blue);
    font-size: 14px;
    font-weight: 600;
  }

  #payment-icons-div {
    display: flex;
    align-items: center;
  }
  .payment-icon {
    width: 50px;

    & + .payment-icon {
      margin-left: 5px;
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: 24px;
  height: 24px;
  color: var(--color-green);
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  padding: 20px 10px;
  margin: 44px 0px;

  color: ${(props) =>
    props.solid ? "var(--color-white)" : "var(--color-blue)"};
  background: ${(props) => (props.solid ? "var(--color-blue)" : "#E5EDFA")};

  cursor: pointer;

  &:hover {
    background: ${(props) => (props.solid ? "#3A67C1" : "#DCE7F9")};

    border: 2px solid #474424;
  }
`;

export const Benefits = styled.ul`
  margin-top: 16px;
  list-style: none;

  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
      color: var(--color-gray);
      font-size: 14px;
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--color-green);

  flex-shrink: 0;
`;

export const SeeMore = styled.button`
  color: var(--color-blue);
  font-size: 13px;
  padding: 5px 0px;
  border: 2px solid transparent;
  border-radius: 4px;
  text-align: left;

  :hover {
    border: 2px solid #474424;
    cursor: pointer;
  }
`;
