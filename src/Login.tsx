import { Box, Image, Link, Text, VStack } from "native-base";

import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { MainButton } from "./components/MainButton";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <InputText label="Email" placeholder="Insira seu endereço de email" />
        <InputText label="Senha" placeholder="Insira sua senha" />
      </Box>
      <MainButton onPress={() => navigation.navigate("Tabs")}>
        Entrar
      </MainButton>
      <Link href="https://www.alura.com.br" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text color="blue.500"> Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
