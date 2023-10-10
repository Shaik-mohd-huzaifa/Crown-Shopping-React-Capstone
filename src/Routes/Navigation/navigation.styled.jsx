import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Navigation = styled.div`
  height: 100px;
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
  img {
    width: 60px;
  }
`;

export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 18px;
`;
