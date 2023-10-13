import { BaseButton, GoogleButton, InvertedButton } from "./button.styled";

export const BUTTON_CLASSES_TYPES = {
  base: "base",
  google: "googleSignin",
  inverted: "Inverted",
};

const getButton = (buttontype = BUTTON_CLASSES_TYPES.base) =>
  ({
    [BUTTON_CLASSES_TYPES.base]: BaseButton,
    [BUTTON_CLASSES_TYPES.google]: GoogleButton,
    [BUTTON_CLASSES_TYPES.inverted]: InvertedButton,
  })[buttontype];

const Button = ({ children, ButtonType, clickEvent, ...otherprops }) => {
  const CustomButton = getButton(ButtonType);
  return <CustomButton {...otherprops}>{children}</CustomButton>;
};

export default Button;
