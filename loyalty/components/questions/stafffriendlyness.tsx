import React, { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';

function RatingButtons({ onRatingChange = () => {} }) {
    const [staffFriendlyness, setstaffFriendlyness] = useState('');

    const ratings = ['Poor', 'Average', 'Good', 'Excellent'];

    const handleRatingClick = (rating) => {
        setstaffFriendlyness(rating);
        onRatingChange(rating);
    }

    return (
        <Box p={5} minW="600px" borderRadius="md" boxShadow="md" bg="white">
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                How friendly was the staff?
            </p>
            {ratings.map((rating, index) => (
                <Button
                    key={index}
                    size="lg"
                    colorScheme={staffFriendlyness === rating ? 'blue' : 'gray'}
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
                Selected Rating: <span style={{ color: 'blue.500', fontWeight: 'bold' }}>{staffFriendlyness}</span>
            </p>
        </Box>
    );
}

export default RatingButtons;
