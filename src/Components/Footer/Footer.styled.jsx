import { styled } from "styled-components";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const FooterContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${DEFAULT_COLOURS.primaryOptional2};
`;


export const FooterTop = styled.div`
  width: 100%;
  display: flex;
`;

export const FooterBottom = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const BrandInfo = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  h2 {
    color: white;
    font-weight: 500;
  }
  img {
    width: 50px;
    border-radius: 10px;
  }
`;