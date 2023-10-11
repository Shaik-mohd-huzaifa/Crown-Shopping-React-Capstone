import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  BrandInfo,
  QuickLinksContainer,
  LogoContainer,
} from "./Footer.styled";
import Logo from "./../../assets/Website Logo.png";
import Button, { BUTTON_CLASSES_TYPES } from "../button/button.component";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <BrandInfo>
          <LogoContainer>
            <img src={Logo} alt="Logo" />
            <h2>Couture Cart</h2>
          </LogoContainer>
          <QuickLinksContainer>
            <Button ButtonType={BUTTON_CLASSES_TYPES.base}>Sign Up</Button>
            <Button ButtonType={BUTTON_CLASSES_TYPES.base}>Log in</Button>
          </QuickLinksContainer>
        </BrandInfo>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
