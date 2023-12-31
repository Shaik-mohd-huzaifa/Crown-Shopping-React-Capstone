import { styled } from "styled-components";
import { ReactComponent as CartImage } from "./../../assets/shopping-bag.svg";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const CartIconImage = styled(CartImage)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  color: ${DEFAULT_COLOURS.primaryOptional2};
`;
