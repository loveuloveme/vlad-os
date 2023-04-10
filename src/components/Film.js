import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Film = props => {
    const {
        year_film,
        year_ceremony,
        ceremony,
        category,
        name,
        film,
        winner,
        _id
    } = props;

    return (
        <Flex
            w='100%'
            justify='space-between'
            align='center'
            cursor='pointer'
            p='10px'

            _hover={{
                bg: '#f2f2f2'
            }}
        >
            <Box>
                <StarIcon opacity={winner === 'True' ? '1' : '0'} />
                <Text
                    fontSize='16px'
                >
                    {name}
                </Text>
                <Box
                    color='#7e7e7e'
                >
                    <Text>{film}</Text>
                    <Text>{year_film}</Text>
                </Box>
            </Box>
            <Text fontSize='24px' fontWeight='bold' color='rgb(199, 159, 39)'>{year_ceremony}</Text>
        </Flex>
    );
};

export default Film;