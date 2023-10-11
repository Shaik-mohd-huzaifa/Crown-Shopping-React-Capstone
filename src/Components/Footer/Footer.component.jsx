import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  BrandInfo,
  QuickLinksContainer,
  LogoContainer,
  SocialLinksContainer,
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
            <Button ButtonType={BUTTON_CLASSES_TYPES.inverted}>Sign Up</Button>
            <Button ButtonType={BUTTON_CLASSES_TYPES.inverted}>Log in</Button>
          </QuickLinksContainer>
          <SocialLinksContainer>
            <img src="" alt="" />
          </SocialLinksContainer>
        </BrandInfo>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
