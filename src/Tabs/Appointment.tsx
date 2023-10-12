import { Divider, ScrollView } from "native-base";
import { AppointmentCard } from "../components/AppointmentCard";
import { Title } from "../components/Title";
import { MainButton } from "../components/MainButton";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAppointmentsPatient } from "../services/patientService";

interface IEspecialista {
  id: string;
  nome: string;
  imagem: string;
  especialidade: string;
}

interface IConsulta {
  id: string;
  data: string;
  especialista: IEspecialista;
}

export default function Appointment() {
  const [proximasConsultas, setProximasConsultas] = useState<IConsulta[]>([]);
  const [consultasPassadas, setConsultasPassadas] = useState<IConsulta[]>([]);

  useEffect(() => {
    async function getAppointments() {
      const pacienteId = await AsyncStorage.getItem("pacienteId");
      if (!pacienteId) return null;

      const todasConsultas: IConsulta[] = await getAppointmentsPatient(
        pacienteId
      );

      const now = new Date();

      const proximas = todasConsultas.filter(
        (consulta) => new Date(consulta.data) > now
      );

      const passadas = todasConsultas.filter(
        (consulta) => new Date(consulta.data) <= now
      );

      setProximasConsultas(proximas);
      setConsultasPassadas(passadas);
    }
    getAppointments();
  }, []);

  return (
    <ScrollView p={5} mt={5}>
      <Title color="blue.500">Minhas consultas</Title>
      <MainButton mt={5} mb={5}>
        Agendar nova consulta
      </MainButton>
      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Próximas consultas
      </Title>
      {proximasConsultas?.map((consulta) => (
        <AppointmentCard
          key={consulta?.id}
          name={consulta?.especialista?.nome}
          area={consulta?.especialista?.especialidade}
          photo={consulta?.especialista?.imagem}
          date={consulta?.data}
          wasScheduled
        />
      ))}

      <Divider mt={2} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Consultas passadas
      </Title>
      {consultasPassadas?.map((consulta) => (
        <AppointmentCard
          key={consulta?.id}
          name={consulta?.especialista?.nome}
          area={consulta?.especialista?.especialidade}
          photo={consulta?.especialista?.imagem}
          date={consulta?.data}
          wasAttended
        />
      ))}
    </ScrollView>
  );
}
