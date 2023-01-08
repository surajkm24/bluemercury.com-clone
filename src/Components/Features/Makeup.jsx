import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop2.avif';

export const Makeup = () => {
    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Brushes & Tools</Text>
                <Text color='#12284c' cursor='pointer'>Eyes</Text>
                <Text color='#12284c' cursor='pointer'>Face & Cheek</Text>
                <Text color='#12284c' cursor='pointer'>Lips</Text>
                <Text color='#12284c' cursor='pointer'>Makeup Accessories</Text>
                <Text color='#12284c' cursor='pointer'>Makeup Removers</Text>
                <Text color='#12284c' cursor='pointer'>Nails</Text>
                <Text color='#12284c' cursor='pointer'>Palettes & Sets</Text>
                <Text color='#12284c' cursor='pointer'>Value & Gift Sets</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Bobbi Brown</Text>
                <Text color='#12284c' cursor='pointer'>Chantecaille</Text>
                <Text color='#12284c' cursor='pointer'>Hourglass</Text>
                <Text color='#12284c' cursor='pointer'>Kjaer Weis</Text>
                <Text color='#12284c' cursor='pointer'>Laura Mercier</Text>
                <Text color='#12284c' cursor='pointer'>Lilah B.</Text>
                <Text color='#12284c' cursor='pointer'>Lune + Aster</Text>
                <Text color='#12284c' cursor='pointer'>NARS</Text>
                <Text color='#12284c' cursor='pointer'>Kosas</Text>
                <Text color='#12284c' cursor='pointer'>Sisley-Paris</Text>
                <Text color='#12284c' cursor='pointer'>Surratt</Text>
                <Text color='#12284c' cursor='pointer'>Tom Ford</Text>
                <Text color='#12284c' cursor='pointer'>Trish McEvoy</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Lune+Aster CC Cream with SPF 50</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Evens skin tone and creates a dewy glow</Text>
            </Box>
        </>)
}