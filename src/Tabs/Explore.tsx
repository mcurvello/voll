import { Box, ScrollView, Text, VStack } from "native-base";
import { InputText } from "../components/InputText";
import { MainButton } from "../components/MainButton";
import { Title } from "../components/Title";
import { AppointmentCard } from "../components/AppointmentCard";

export default function Explore() {
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
          <InputText placeholder="Digite a especialidade" />
          <InputText placeholder="Digite sua localização" />
          <MainButton mt={3} mb={3}>
            Buscar
          </MainButton>
        </Box>
        <Title color="blue.500" alignSelf="center" mb={5}>
          Resultado da Busca
        </Title>
        {[1, 2, 3].map((_, index) => (
          <VStack
            flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}
          >
            <AppointmentCard
              area="Cardiologia"
              name="Dr. Marcio"
              photo="https://github.com/mcurvello.png"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
