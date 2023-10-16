import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const Navigation = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 140px;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: center;
  column-gap: 10px;
  img {
    width: 60px;
  }
  p {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;
