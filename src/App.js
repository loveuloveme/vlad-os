import { Box, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import Search from "./components/Search";
import Wiki from "./components/Wiki";

function App() {
    return (
        <Container
            maxW='container.lg'
        >
            <Box
                h='400px'
                bg='url("https://cdnn21.img.ria.ru/images/155545/93/1555459382_0:54:3000:1742_1920x0_80_0_0_10a2b6c850aae6cdcd9984cd27a7d8b3.jpg")'
                bgSize='cover'
            >

            </Box>
            <SimpleGrid
                columns='4'
                gap='10px'
            >
                <Search t='name' name='Именам' />
                <Search t='film' name='Фильмам'/>
                <Search t='category' name='Категориям'/>
                <Search t='wiki' name='Wiki' node={Wiki} />
            </SimpleGrid>
        </Container>
    );
}

export default App;
