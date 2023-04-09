import { Box, Container, HStack } from "@chakra-ui/react";
import Search from "./components/Search";

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
            <HStack
                spacing='15px'
            >
                <Search t='hg' name='Владам' />
                <Search t='hg' name='Лерам'/>
                <Search t='hg' name='Сергеям'/>
            </HStack>
        </Container>
    );
}

export default App;
