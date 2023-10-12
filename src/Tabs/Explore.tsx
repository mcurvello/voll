import { useState } from "react";
import { Box, ScrollView, Text, VStack } from "native-base";
import { InputText } from "../components/InputText";
import { MainButton } from "../components/MainButton";
import { Title } from "../components/Title";
import { AppointmentCard } from "../components/AppointmentCard";
import { getDoctor } from "../services/doctorService";

interface IDoctor {
  id: string;
  nome: string;
  imagem: string;
  especialidade: string;
}

export default function Explore({ navigation }: any) {
  const [estado, setEstado] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [resuladoBusca, setResultadoBusca] = useState([] as any);

  async function search() {
    if (!estado || !especialidade) return null;

    const response = await getDoctor(estado, especialidade);
    if (response) {
      setResultadoBusca(response);
      console.log(response);
    }
  }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}
      >
        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          mt={5}
          shadow="1"
          borderRightRadius="md"
          bgColor="white"
        >
          <InputText
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <InputText
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <MainButton mt={3} mb={3} onPress={search}>
            Buscar
          </MainButton>
        </Box>
        <Title color="blue.500" alignSelf="center" mb={5}>
          Resultado da Busca
        </Title>
        {resuladoBusca?.map((doctor: IDoctor, index) => (
          <VStack
            flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}
          >
            <AppointmentCard
              area={doctor.especialidade}
              name={doctor.nome}
              photo={doctor.imagem}
              onPress={() =>
                navigation.navigate("Schedule", { especialistaId: doctor.id })
              }
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
