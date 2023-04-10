import { Box, Heading, Link } from '@chakra-ui/layout';
import React from 'react';

const Wiki = props => {
    const { name, url } = props;

    return (
        <Box
            w='100%'

            p='10px'

            _hover={{
                bg: '#f2f2f2'
            }}
        >
            <Heading fontFamily='Times New Roman' fontWeight='400'>{name}</Heading>
            <Link href={url} color='#3366cc'>{url}</Link>
        </Box>
    );
};

export default Wiki;