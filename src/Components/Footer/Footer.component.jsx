import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  BrandInfo,
  QuickLinksContainer,
  LogoContainer,
} from "./Footer.styled";
import Logo from "./../../assets/Website Logo.png";
import Button from "../button/button.component";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <BrandInfo>
          <LogoContainer>
            <img src={Logo} alt="Logo" />
            <h2>Couture Cart</h2>
          </LogoContainer>
          <QuickLinksContainer></QuickLinksContainer>
        </BrandInfo>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
