import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";
import { Title } from "../components/Title";

export default function Profile() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5} mt={5}>
        <Title color="blue.500">Meu perfil</Title>
        <Avatar
          source={{ uri: "https://github.com/mcurvello.png" }}
          mt={5}
          size="xl"
        />
        <Title color="blue.500">Informações pessoais</Title>
        <Title fontSize="lg" mb={1}>
          Marcio Curvello
        </Title>
        <Text>12/12/1990</Text>
        <Text>Rio de Janeiro</Text>

        <Divider mt={8} />

        <Title color="blue.500">Histórico médico</Title>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
