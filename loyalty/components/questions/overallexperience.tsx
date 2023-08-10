import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';
// ['Poor', 'Average', 'Good', 'Excellent']

type RatingType = 'Poor' | 'Average' | 'Good' | 'Excellent';

function RatingButtons({ onRatingChange = (rating: RatingType) => {} }) {
    
    const ratings: RatingType[] = ['Poor', 'Average', 'Good', 'Excellent'];

    const handleRatingClick = (rating: RatingType) => {
        setoverallExperience(rating);
        onRatingChange(rating);
    }
    
    const [overallExperience, setoverallExperience] = useState<RatingType | null>(null);


    return (
        <Box p={5} minW="600px" borderRadius="md" boxShadow="md" bg="white">
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                How was it?
            </p>
            {ratings.map((rating, index) => (
                <Button
                    key={index}
                    size="lg"
                    colorScheme={overallExperience === rating ? 'blue' : 'gray'}
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
                Selected Rating: <span style={{ color: 'blue.500', fontWeight: 'bold' }}>{overallExperience}</span>
            </p>
        </Box>
    );
}

export default RatingButtons;
