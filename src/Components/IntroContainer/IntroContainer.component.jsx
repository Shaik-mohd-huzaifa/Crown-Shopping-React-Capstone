import {
  Content,
  IntroContainer,
  ImageContainer,
} from "./IntroContainer.styled";

const Intro = () => {
  return (
    <IntroContainer>
      <Content>
        <h1>
          Welcome to <span>Couture Cart</span>
        </h1>
        <h2>Elevate Your Style with Couture Elegance</h2>
        <p>
          Couture Cart is where fashion meets sophistication. Discover a curated
          selection of high-end clothing and accessories designed to redefine
          elegance. Unveil a world of fashion that resonates with your unique
          taste and sets you apart from the crowd.
        </p>
      </Content>
      <ImageContainer>
        <img src="assets/Landing.png" alt="Landing" />
      </ImageContainer>
    </IntroContainer>
  );
};

export default Intro;
