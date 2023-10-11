import styled from "styled-components";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${DEFAULT_COLOURS.primaryOptional2};
  color: white;
  text-transform: uppercase;
  font-family: "Inter";
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    /* border: 1px solid black; */
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
