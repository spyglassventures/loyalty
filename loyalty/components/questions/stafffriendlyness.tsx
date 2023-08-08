import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';

function RatingButtons() {
    const [selectedRating, setSelectedRating] = useState(null);

    const ratings = ['Poor', 'Average', 'Good', 'Excellent'];

    return (
        <Box p={5} minW="600px" borderRadius="md" boxShadow="md" bg="white">
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                How friendly was the staff?
            </p>
            {ratings.map((rating, index) => (
                <Button
                    key={index}
                    size="lg"
                    colorScheme={selectedRating === rating ? 'blue' : 'gray'}
                    borderRadius="full"
                    m={2}
                    boxShadow="sm"
                    _hover={{ boxShadow: 'md' }}
                    onClick={() => setSelectedRating(rating)}
                >
                    {rating}
                </Button>
            ))}
            <p style={{ marginTop: '20px' }}>
                Selected Rating: <span style={{ color: 'blue.500', fontWeight: 'bold' }}>{selectedRating}</span>
            </p>
        </Box>
    );
}

export default RatingButtons;
