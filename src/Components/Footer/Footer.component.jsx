import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  BrandInfo,
  LogoContainer,
} from "./Footer.styled";
import Logo from "./../../assets/Website Logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <BrandInfo>
          <LogoContainer>
            <img src={Logo} alt="Logo" />
            <h2>Couture Cart</h2>
          </LogoContainer>
        </BrandInfo>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
