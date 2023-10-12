import { View, Text } from "react-native";
import React, { useState } from "react";
import { VStack, useToast } from "native-base";
import { scheduleAppointment } from "./services/appointmentService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InputText } from "./components/InputText";
import { MainButton } from "./components/MainButton";
import { convertStringToDate } from "./utils/conversions";

export default function Schedule({ route, navigation }: any) {
  const [data, setData] = useState("");
  const toast = useToast();

  async function schedule() {
    const pacienteId = await AsyncStorage.getItem("pacienteId");
    const { especialistaId } = route.params;
    if (!pacienteId || !especialistaId || !data) return null;

    const dataFormatada = convertStringToDate(data);

    const result = await scheduleAppointment(
      dataFormatada,
      especialistaId,
      pacienteId
    );

    if (result) {
      toast.show({
        title: "Consulta agendada com sucesso",
        backgroundColor: "green.500",
      });
      return navigation.goBack();
    }
    toast.show({
      title: "Erro ao agendar consulta",
      description: "Horário indisponível",
      backgroundColor: "red.500",
    });
  }
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
      <InputText placeholder="Digite a data" onChangeText={setData} />
      <MainButton onPress={schedule}>Agendar</MainButton>
    </VStack>
  );
}
