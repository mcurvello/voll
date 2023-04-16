import { FormControl, Input } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
}
export function InputText({
  label,
  placeholder,
  secureTextEntry = false,
}: InputProps): JSX.Element {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        secureTextEntry={secureTextEntry}
      />
    </FormControl>
  );
}
