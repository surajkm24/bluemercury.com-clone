import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop7.avif';

export const HomeAndLifestyle = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Active Lifestyle</Text>
                <Text color='#12284c' cursor='pointer'>Aromatherapy</Text>
                <Text color='#12284c' cursor='pointer'>Candles</Text>
                <Text color='#12284c' cursor='pointer'>Cleaning & home Care</Text>
                <Text color='#12284c' cursor='pointer'>Diffusers</Text>
                <Text color='#12284c' cursor='pointer'>Hand Soap & Sanitizers</Text>
                <Text color='#12284c' cursor='pointer'>Pre & Postnatal Care</Text>
                <Text color='#12284c' cursor='pointer'>Room & Pillow Sprays</Text>
                <Text color='#12284c' cursor='pointer'>Sleep & Stress</Text>
                <Text color='#12284c' cursor='pointer'>Towels & Accessories</Text>
                <Text color='#12284c' cursor='pointer'>Vitamins & Supplements</Text>
                <Text color='#12284c' cursor='pointer'>Wellness</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Diptyque</Text>
                <Text color='#12284c' cursor='pointer'>LAFCO</Text>
                <Text color='#12284c' cursor='pointer'>L'AVANT</Text>
                <Text color='#12284c' cursor='pointer'>NEST New York</Text>
                <Text color='#12284c' cursor='pointer'>Resore</Text>
                <Text color='#12284c' cursor='pointer'>Vitruvi</Text>
                <Text color='#12284c' cursor='pointer'>VOLO Beauty</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>New! from Diptyque</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>La Droguerie Collection: the Good, the Beautiful and the Useful</Text>
            </Box>
        </>)
}