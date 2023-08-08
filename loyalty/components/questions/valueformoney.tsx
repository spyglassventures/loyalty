import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';

function RatingButtons() {
    const [valueForMoney, setValueformoney] = useState('');

    const ratings = ["Bad", "Fair", "Bargain", "It's a steal!"];

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
                    onClick={() => setValueformoney(rating)}
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
