import { useEffect, useState } from "react";
import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";
import { Title } from "../components/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPatient } from "../services/patientService";
import { IPatient } from "../interfaces/IPatient";
import { MainButton } from "../components/MainButton";

export default function Profile({ navigation }: any) {
  const [patientData, setPatientData] = useState({} as IPatient);

  useEffect(() => {
    async function getPatientData() {
      const pacienteId = await AsyncStorage.getItem("pacienteId");

      if (!pacienteId) return null;

      const response = await getPatient(pacienteId);
      if (response) {
        setPatientData(response);
        console.log(response);
      }
    }
    getPatientData();
  }, []);

  function logout() {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("pacienteId");
    navigation.replace("Login");
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5} mt={5}>
        <Title color="blue.500">Meu perfil</Title>
        <Avatar source={{ uri: patientData.imagem }} mt={5} size="xl" />
        <Title color="blue.500">Informações pessoais</Title>
        <Title fontSize="lg" mb={1}>
          {patientData?.nome}
        </Title>
        <Text>{patientData?.email}</Text>
        <Text>{patientData?.endereco?.estado}</Text>

        <Divider mt={8} />

        <Title color="blue.500">Planos de saúde</Title>
        {patientData?.planosSaude?.map((plano, index) => (
          <Text key={index}>{plano}</Text>
        ))}
        <MainButton onPress={logout}>Deslogar</MainButton>
      </VStack>
    </ScrollView>
  );
}
