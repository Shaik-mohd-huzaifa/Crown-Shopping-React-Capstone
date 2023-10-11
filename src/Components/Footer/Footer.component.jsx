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
        <BrandInfo>
          <LogoContainer>
            <img src="../../assets/Website Logo.png" alt="Logo" />
          </LogoContainer>
        </BrandInfo>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
