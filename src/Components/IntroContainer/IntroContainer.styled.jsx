import styled from "styled-components";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const IntroContainer = styled.div`
  width: 100%;
  padding: 0px 20px;
  height: 580px;
  display: flex;
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 10px;
  h1 {
    font-size: 70px;
    margin-bottom: 0px;
    margin-top: 100px;
    line-height: 0.9em;
    span {
      color: ${DEFAULT_COLOURS.primaryOptional2};
    }
  }
  h2 {
    margin-bottom: 0px;
    margin-top: 5px;
  }
  p {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  img {
    width: 100px;
    height: 100px;
  }
`;