import { Box, Checkbox, Image, ScrollView, Text, useToast } from "native-base";

import Logo from "./assets/Logo.png";
import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { MainButton } from "./components/MainButton";
import { useState } from "react";
import { sections } from "./utils/registerInput";
import { createPatient } from "./services/patientService";

export default function Register({ navigation }: any) {
  const [numSection, setNumSection] = useState(0);
  const [data, setData] = useState({} as any);
  const [planos, setPlanos] = useState([] as number[]);

  const toast = useToast();

  function nextSection() {
    if (numSection < sections.length - 1) {
      setNumSection(numSection + 1);
    } else {
      register();
    }
  }

  function prevSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1);
    }
  }

  function updateData(id: string, value: string) {
    setData({ ...data, [id]: value });
  }

  async function register() {
    const result = await createPatient({
      cpf: data.cpf,
      nome: data.nome,
      email: data.email,
      endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        estado: data.estado,
      },
      senha: data.senha,
      telefone: data.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: data.imagem,
    });

    if (result) {
      toast.show({
        title: "Cadastro realizado com sucesso",
        description: "Você já pode fazer login",
        backgroundColor: "green.500",
      });
      navigation.replace("Login");
    } else {
      toast.show({
        title: "Erro ao fazer cadastro",
        description: "Verifique os dados e tente novamente",
        backgroundColor: "red.500",
      });
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
              value={data[input.name]}
              onChangeText={(text) => updateData(input.name, text)}
            />
          );
        })}
      </Box>
      <Box>
        {numSection == 2 && (
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
            Selecione o plano:
          </Text>
        )}
        {sections[numSection]?.checkbox?.map((checkbox) => {
          return (
            <Checkbox
              key={checkbox.id}
              value={checkbox.value}
              onChange={() => {
                setPlanos((planosAnteriores) => {
                  if (planosAnteriores.includes(checkbox.id)) {
                    return planosAnteriores.filter((id) => id !== checkbox.id);
                  }
                  return [...planosAnteriores, checkbox.id];
                });
              }}
              isChecked={planos.includes(checkbox.id)}
            >
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
        {numSection == 2 ? "Finalizar" : "Avançar"}
      </MainButton>
    </ScrollView>
  );
}
