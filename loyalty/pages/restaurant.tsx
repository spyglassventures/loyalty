import { useRouter } from 'next/router';
import Link from 'next/link';
import Questions from "../components/questions_list";
import Image from "next/image";
import Cleanliness from '../components/questions/cleanliness';
import Foodtaste from '../components/questions/foodtaste';
import Stafffriendlyness from '../components/questions/stafffriendlyness';
import Valueformoney from '../components/questions/valueformoney';
import Overallexperience from '../components/questions/overallexperience';
import {
  ChakraProvider, Button, Text, Flex, VStack
} from "@chakra-ui/react";

export default function RestaurantDetail() {
  const router = useRouter();
  const { id, name, timestamp } = router.query;

  if (!id || !name || !timestamp) {
    return <p>Loading...</p>;
  }

  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        bg="black"
      >
        <VStack spacing={6} w="80%" maxH="90vh" overflowY="auto" boxShadow="xl" p="6" rounded="md" bg="rgb(0, 0, 0)">
          <div>
            <Image
              src="/images/loyalty_logo.png"
              alt="Placeholder preview of templates"
              width={180}
              height={90}
            />
          </div>
          <Text color="white">ID: {id}</Text>
          <Text color="white">Restaurant: {name}</Text>
          <Text color="white">Timestamp: {timestamp}</Text>

          <VStack spacing={4} w="100%">
            <Cleanliness />
            <Foodtaste />
            <Stafffriendlyness />
            <Valueformoney />
            <Overallexperience />
          </VStack>

          <Questions />

          <Link href="/">
            <Button colorScheme="teal" variant="outline">
              Abort without saving
            </Button>
          </Link>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}
