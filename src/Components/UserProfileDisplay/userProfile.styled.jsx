import styled from "styled-components";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const ProfileContainer = styled.div`
  width: fit-content;
  min-width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px 10px;
  position: absolute;
  top: 80px;
  right: 33px;
  border-radius: 10px;
  border: 4px dashed ${DEFAULT_COLOURS.primaryOptional2};
  button {
    min-width: 10px;
    width: 90% !important;
  }
  .logout {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 3px;
    color: ${DEFAULT_COLOURS.primaryOptional2};
    text-decoration: underline;
    margin: 7px 0;
    img {
      width: 18px;
    }
  }
`;

export const QuickLinks = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 7px 0px 7px;
  justify-self: flex-start;
  padding-left: 5px;
  column-gap: 5px;
  /* border-bottom: 0.5px solid grey; */
  margin: 0;
  img {
    width: 18px;
  }
  span {
    margin: 0;
    font-weight: 500;
  }
  &:hover {
    border: 0;
    background-color: #d5d5d5;
    border-radius: 3px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 10px;
`;
export const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  /* width: auto; */
  justify-content: flex-start;
  p {
    margin: 0;
    font-size: 14px;
  }
  p:nth-of-type(2) {
    text-decoration: underline;
  }
`;

