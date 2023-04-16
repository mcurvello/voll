import { Divider, ScrollView } from "native-base";
import { AppointmentCard } from "../components/AppointmentCard";
import { Title } from "../components/Title";
import { MainButton } from "../components/MainButton";

export default function Appointment() {
  return (
    <ScrollView p={5} mt={5}>
      <Title color="blue.500">Minhas consultas</Title>
      <MainButton mt={5} mb={5}>
        Agendar nova consulta
      </MainButton>
      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Próximas consultas
      </Title>
      <AppointmentCard
        name="Dr. Marcio"
        area="Cardiologista"
        photo="https://github.com/mcurvello.png"
        date="20/04/2023"
        wasScheduled
      />

      <Divider mt={2} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Consultas passadas
      </Title>
      <AppointmentCard
        name="Dr. Marcio"
        area="Cardiologista"
        photo="https://github.com/mcurvello.png"
        date="20/04/2023"
        wasAttended
      />
      <AppointmentCard
        name="Dr. Marcio"
        area="Cardiologista"
        photo="https://github.com/mcurvello.png"
        date="20/04/2023"
        wasAttended
      />
      <AppointmentCard
        name="Dr. Marcio"
        area="Cardiologista"
        photo="https://github.com/mcurvello.png"
        date="20/04/2023"
        wasAttended
      />
    </ScrollView>
  );
}
