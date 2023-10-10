import { styled } from "styled-components";
import { DEFAULT_COLOURS } from "../../base/default.colors";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategoryContainer = styled.div`
  height: 50px;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
  /* border-radius: 10px; */
  background-color: #00000035;
  background-color: ${DEFAULT_COLOURS.primaryOptional2};
  backdrop-filter: blur(7px);
  position: absolute;
  font-family: "Inter";
  h2 {
    font-weight: bold;
    margin: 0px 0px;
    font-size: 30px;
    text-transform: capitalize;
    color: white;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    color: white;
  }
`;

export const HomePageCategoryContainer = styled.div`
  min-width: 30%;
  height: 400px;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 7.5px 15px;
  border-radius: 10px;
  font-family: "Roboto Condensed", "";
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryContainer} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
