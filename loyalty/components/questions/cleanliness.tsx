import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';

type RatingType = 'Dirty' | 'Average' | 'Good' | 'Excellent';

function RatingButtons({ onRatingChange = (rating: RatingType) => {} }) {
    

    // type RatingType = 'Dirty' | 'Average' | 'Good' | 'Excellent';


    //const ratings = ['Dirty', 'Average', 'Good', 'Excellent'];
    const ratings: RatingType[] = ['Dirty', 'Average', 'Good', 'Excellent'];


    const handleRatingClick = (rating: RatingType) => {
        setCleanliness(rating);
        onRatingChange(rating);
    }
    
    const [cleanliness, setCleanliness] = useState<RatingType | null>(null);

    return (
        <Box p={5} minW="600px" borderRadius="md" boxShadow="md" bg="white">
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                How would you rate the cleanliness of the restaurant?
            </p>
            {ratings.map((rating, index) => (
                <Button
                    key={index}
                    size="lg"
                    colorScheme={cleanliness === rating ? 'blue' : 'gray'}
                    borderRadius="full"
                    m={2}
                    boxShadow="sm"
                    _hover={{ boxShadow: 'md' }}
                    onClick={() => handleRatingClick(rating)}
                >
                    {rating}
                </Button>
            ))}
            <p style={{ marginTop: '20px' }}>
                Selected Rating: <span style={{ color: 'blue.500', fontWeight: 'bold' }}>{cleanliness}</span>
            </p>
        </Box>
    );
}

export default RatingButtons;
