import { styled } from "styled-components";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  border: 4px dashed ${DEFAULT_COLOURS.primaryOptional2};
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${DEFAULT_COLOURS.primaryOptional2};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: black;
  }
`;
