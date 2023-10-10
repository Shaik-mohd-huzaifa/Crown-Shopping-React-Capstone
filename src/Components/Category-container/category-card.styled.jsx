import { styled } from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategoryContainer = styled.div`
  height: fit-content;
  width: 30%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  position: absolute;
  font-family: "Inter";
  margin-bottom: 10px;
  h2 {
    font-weight: bold;
    margin: 0px 0px;
    font-size: 30px;
    text-transform: capitalize;
    color: black;
  }

  a {
    font-weight: 500;
    font-size: 16px;
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
