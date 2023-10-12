import { useEffect, useState } from "react";
import { Box, Image, Link, Text, VStack, useToast } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { MainButton } from "./components/MainButton";
import { createLogin } from "./services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    async function checkLogin() {
      const token = AsyncStorage.getItem("token");
      if (token) {
        navigation.replace("Tabs");
      }
      setLoading(false);
    }
    checkLogin();
  }, [email, password]);

  async function login() {
    const response = await createLogin(email, password);
    if (response) {
      const { token } = response;
      AsyncStorage.setItem("token", token);

      const tokenDecoded = jwtDecode(token) as any;

      const pacienteId = tokenDecoded.id;
      AsyncStorage.setItem("pacienteId", pacienteId);

      navigation.replace("Tabs");
    } else {
      toast.show({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente",
        backgroundColor: "red.500",
      });
    }
  }

  if (loading) {
    return null;
  }

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <InputText
          label="Email"
          placeholder="Insira seu endereço de email"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Box>
      <MainButton onPress={login}>Entrar</MainButton>
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
