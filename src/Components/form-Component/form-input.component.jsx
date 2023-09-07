import { Group, Input, InputLabel } from "./form-input.styled";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
    </Group>
  );
};

export default FormInput;
