import { Box, Divider, Image, ScrollView, Text, VStack } from "native-base";
import Logo from "../assets/Logo.png";
import { Title } from "../components/Title";
import { InputText } from "../components/InputText";
import { MainButton } from "../components/MainButton";
import { depoimentos } from "../utils/mock";

export default function Main() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}
      >
        <Image source={Logo} alt="Logo" mt={10} />
        <Title color="blue.500">Boas-vindas!</Title>
        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          mt={10}
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
        <Title color="blue.800" alignSelf="center">
          Depoimentos
        </Title>
        <VStack space={3} divider={<Divider />} w="100%">
          {depoimentos.map((depoimento) => (
            <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
              <Text color="gray.300" fontSize="md" textAlign="justify">
                {depoimento.text}
              </Text>
              <Text
                color="gray.500"
                fontSize="lg"
                fontWeight="bold"
                alignSelf="center"
                mt={2}
              >
                {depoimento.titulo}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}
