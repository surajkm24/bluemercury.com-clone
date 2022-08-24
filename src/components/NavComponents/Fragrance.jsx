import {Flex, Box, Text} from '@chakra-ui/react';

export const Fragrance = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Aromatherapy</Text>
                <Text color='#12284c' cursor='pointer'>Body Spray & Hair Mist</Text>
                <Text color='#12284c' cursor='pointer'>Candles</Text>
                <Text color='#12284c' cursor='pointer'>Cologne</Text>
                <Text color='#12284c' cursor='pointer'>Diffusers</Text>
                <Text color='#12284c' cursor='pointer'>Perfume</Text>
                <Text color='#12284c' cursor='pointer'>Rollerballs & Travel Size</Text>
                <Text color='#12284c' cursor='pointer'>Room & Pillow Sprays</Text>
                <Text color='#12284c' cursor='pointer'>Value & Gift Sets</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Abel</Text>
                <Text color='#12284c' cursor='pointer'>Acqua di Parma</Text>
                <Text color='#12284c' cursor='pointer'>Aromatherapy Associates</Text>
                <Text color='#12284c' cursor='pointer'>Diptyque</Text>
                <Text color='#12284c' cursor='pointer'>Fornasetti</Text>
                <Text color='#12284c' cursor='pointer'>Jo Malone London</Text>
                <Text color='#12284c' cursor='pointer'>LAFCO</Text>
                <Text color='#12284c' cursor='pointer'>Lake & Skye</Text>
                <Text color='#12284c' cursor='pointer'>Molton Brown</Text>
                <Text color='#12284c' cursor='pointer'>NEST New York</Text>
                <Text color='#12284c' cursor='pointer'>Sana Jardin</Text>
                <Text color='#12284c' cursor='pointer'>The Maker</Text>
                <Text color='#12284c' cursor='pointer'>Vilhelm Perfumerie</Text>
                <Text color='#12284c' cursor='pointer'>Vitruvi</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/nest_ny_navigation_303x303.jpg?v=1660073731' alt='Blue Mercury'/>
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Pumpkin Chai is Back!</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Shop now to get a head start on the season</Text>
            </Box>
        </>)
}