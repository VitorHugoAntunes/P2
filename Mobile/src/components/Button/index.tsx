import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, TextButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <TextButton>{text}</TextButton>
    </ButtonContainer>
  );
}
