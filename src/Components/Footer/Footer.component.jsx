import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  BrandInfo,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <BrandInfo></BrandInfo>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
