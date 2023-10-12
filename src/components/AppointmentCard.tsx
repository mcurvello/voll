import { Avatar, Text, VStack } from "native-base";
import { MainButton } from "./MainButton";

interface CardProps {
  name: string;
  photo: string;
  area: string;
  date?: string;
  wasAttended?: boolean;
  wasScheduled?: boolean;
  onPress?: () => void;
}

export function AppointmentCard({
  name,
  photo,
  date,
  area,
  wasAttended,
  wasScheduled,
  onPress,
}: CardProps) {
  return (
    <VStack
      w="100%"
      bg={wasAttended ? "blue.100" : "white"}
      p={5}
      borderRadius="lg"
      shadow={2}
      mb={5}
    >
      <VStack flexDir="row">
        <Avatar source={{ uri: photo }} size="lg" />
        <VStack pl={4}>
          <Text fontSize="md" fontWeight="bold">
            {name}
          </Text>
          <Text>{area}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>
      <MainButton mt={4} onPress={onPress}>
        {wasScheduled ? "Cancelar" : "Agendar consulta"}
      </MainButton>
    </VStack>
  );
}
