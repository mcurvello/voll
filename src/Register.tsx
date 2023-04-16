import { Box, Checkbox, Image, ScrollView, Text } from "native-base";

import Logo from "./assets/Logo.png";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { MainButton } from "./components/MainButton";
import { useState } from "react";
import { sections } from "./utils/registerInput";

export default function Register() {
  const [numSection, setNumSection] = useState(0);

  function nextSection() {
    if (numSection < sections.length - 1) {
      setNumSection(numSection + 1);
    }
  }

  function prevSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" mt={10} />
      <Title>{sections[numSection].title}</Title>
      <Box>
        {sections[numSection]?.input?.map((input) => {
          return (
            <InputText
              label={input.label}
              placeholder={input.placeholder}
              secureTextEntry={input.secureTextEntry}
              key={input.id}
            />
          );
        })}
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
          Selecione o plano:
        </Text>
        {sections[numSection]?.checkbox?.map((checkbox) => {
          return (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          );
        })}
      </Box>
      {numSection > 0 && (
        <MainButton bgColor="gray.400" onPress={() => prevSection()}>
          Voltar
        </MainButton>
      )}
      <MainButton mt={4} mb={20} onPress={() => nextSection()}>
        Avançar
      </MainButton>
    </ScrollView>
  );
}
