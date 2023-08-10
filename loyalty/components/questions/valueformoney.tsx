import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';


type RatingType = 'Poor' | 'Average' | 'Good' | 'Amazing';

function RatingButtons({ onRatingChange = (rating: RatingType) => {} }) {
    
    const ratings: RatingType[] = ['Poor', 'Average', 'Good', 'Amazing'];

    const handleRatingClick = (rating: RatingType) => {
        setValueformoney(rating);
        onRatingChange(rating);
    }
    
    const [valueForMoney, setValueformoney] = useState<RatingType | null>(null);


    return (
        <Box p={5} minW="600px" borderRadius="md" boxShadow="md" bg="white">
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                How do you rate the value vs. what you paid?
            </p>
            {ratings.map((rating, index) => (
                <Button
                    key={index}
                    size="lg"
                    colorScheme={valueForMoney === rating ? 'blue' : 'gray'}
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
                Selected Rating: <span style={{ color: 'blue.500', fontWeight: 'bold' }}>{valueForMoney}</span>
            </p>
        </Box>
    );
}

export default RatingButtons;
