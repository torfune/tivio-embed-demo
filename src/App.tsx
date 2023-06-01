import {ChakraBaseProvider, Heading, Stack, Text} from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import './App.css'

function App() {
    return (
        <ChakraBaseProvider theme={chakraTheme}>
            <Stack spacing={3}>
                <Heading>Tivio Embed Player Demo</Heading>
                <Text fontSize='xs'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus purus,
                    viverra vitae elit sit amet, dictum faucibus augue. Suspendisse interdum ultricies nibh vitae
                    iaculis. Curabitur massa lacus, suscipit et pellentesque id, mollis ut sem. Cras tincidunt turpis
                    justo, interdum venenatis lorem aliquam sit amet. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Fusce sit amet metus feugiat, molestie ipsum quis,
                    imperdiet augue. Etiam nec dictum nisi, ut iaculis justo. Vivamus placerat sagittis tempus.
                    Curabitur aliquet velit sed finibus vestibulum. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Ut tempor nisl a scelerisque laoreet. Cras sagittis
                    malesuada tortor, eget aliquam justo gravida sit amet. Donec urna tellus, imperdiet ut quam sed,
                    tempus sodales ipsum. Nullam et est eros. Vestibulum eleifend purus sit amet ante porta, at
                    tincidunt tellus ornare. Vestibulum non placerat dui.
                </Text>
            </Stack>
        </ChakraBaseProvider>
    )
}

export default App
