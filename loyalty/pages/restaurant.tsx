import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from "next/image";

// Question Main page with Button and free text field
import Questions from "../components/questions_list";

// Questions (individual ones rating buttons)
import Cleanliness from '../components/questions/cleanliness';
import Foodtaste from '../components/questions/foodtaste';
import Stafffriendlyness from '../components/questions/stafffriendlyness';
import Valueformoney from '../components/questions/valueformoney';
import Overallexperience from '../components/questions/overallexperience';


import {
  ChakraProvider, Button, Text, Flex, VStack, 
} from "@chakra-ui/react";
import { useState } from 'react';

export default function RestaurantDetail() {
  const router = useRouter();
  const { id, name, timestamp } = router.query;

  type RatingType = 'Dirty' | 'Average' | 'Good' | 'Excellent' | 'Poor' | 'OMG' | 'Amazing';


  // import question rating answers
  const [cleanlinessRating, setCleanlinessRating] = useState<RatingType | null>(null);
  const [foodTasteRating, setFoodTasteRating] = useState<RatingType | null>(null);
  const [overallexperienceeRating, setOverallexperienceeRating] = useState<RatingType | null>(null);
  const [stafffriendlynessRating, setStafffriendlynessRating] = useState<RatingType | null>(null);
  const [valueformoneyRating, setValueformoneyRating] = useState<RatingType | null>(null);
  const [comments, setCommentFreetext] = useState<string | null>(null);
  


      // When the "Save to JSON" button is clicked
  const handleSaveToJson = () => {
        const data = {
          id: id,
          name: name,
          timestamp: timestamp,
          R_cleanliness: cleanlinessRating,
          R_foodTaste: foodTasteRating,
          R_overallexperiencee: overallexperienceeRating,
          R_stafffriendlyness: stafffriendlynessRating,
          R_valueformoney: valueformoneyRating,
          R_comments: comments,
        
          
            //cleanliness: cleanlinessRating,
            //foodTaste: foodTasteRating,
            // ... include all other ratings
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${id}_at_${new Date().toISOString()}.json`; // name and timestamp
        link.click();
        URL.revokeObjectURL(url);
    };

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
            <Cleanliness onRatingChange={(rating) => setCleanlinessRating(rating)} />
            <Foodtaste onRatingChange={(rating) => setFoodTasteRating(rating)} />
            <Stafffriendlyness onRatingChange={(rating) => setStafffriendlynessRating(rating)} />
            <Valueformoney onRatingChange={(rating) => setValueformoneyRating(rating)} />
            <Overallexperience onRatingChange={(rating) => setOverallexperienceeRating(rating)} />
          </VStack>

          <Questions onCommentChange={(event) => setCommentFreetext(event)} />
        {/* <Button onClick={handleSaveToJson}>Post feedback & earn loyalty tokens (Demo: Save to JSON)</Button> */}

          <Button 
              onClick={handleSaveToJson}
              backgroundColor="lightblue" 
              color="black"
              
              borderRadius="4px"
              padding="8px 16px"
              fontSize="18px"
              _hover={{ backgroundColor: 'teal' }}
              variant="outline"
            >
              Share feedback & earn loyalty tokens (Demo: Save to JSON)
        </Button>

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
