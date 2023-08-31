import "./button.styles.scss";

const BUTTON_CLASSES_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, ButtonType, ...otherprops }) => {
  return (
    <button
      className={`button-container ${BUTTON_CLASSES_TYPES[ButtonType]}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
