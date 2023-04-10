import { Box, Text, Link } from '@chakra-ui/layout';
import React from 'react';

const Wiki = props => {
    const { name, url, ...rest } = props;

    return (
        <Box
            w='100%'
            p='10px'
            _hover={{
                bg: '#f2f2f2'
            }}

            {...rest}
        >
            <Text fontFamily='Times New Roman' fontWeight='400' fontSize='16px'>{name}</Text>
            <Link href={url} color='#3366cc' fontSize='12px'>{url}</Link>
        </Box>
    );
};

export default Wiki;
