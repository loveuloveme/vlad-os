import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Heading, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Film from './Film';
import { HOST } from '../config';

const Search = props => {
    const { name, t, node = Film } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const previousController = useRef();
    const debounce = useRef();

    const getData = q => {
        if (previousController.current) {
            previousController.current.abort();
        }

        const controller = new AbortController();
        const signal = controller.signal;
        previousController.current = controller;

        setIsLoading(true);

        fetch(HOST + `/search?q=${q}&t=${t}`, {
            signal,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                setData(response || []);
            })
            .finally(() => setIsLoading(false));
    };

    const _onChange = event => {
        clearTimeout(debounce.current);

        debounce.current = setTimeout(() => {
            if (event.target.value) {
                getData(event.target.value);
            }
        }, 300);
    };


    return (
        <Flex
            flex='1'
            direction='column'
            h='100%'
        >
            <InputGroup
                mt='10px'
                border='rgb(199, 159, 39)'
            >
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input
                    placeholder={`Поиск по ${name}`}
                    onChange={_onChange}
                />
            </InputGroup>

            <VStack
                spacing='5px'
                pb='10px'
            >
                {data.map((film, i)=> React.createElement(node, {...film, key: i}))}
            </VStack>
        </Flex>
    );
};

export default Search;