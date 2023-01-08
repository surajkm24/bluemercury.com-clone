import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop4.avif';

export const BathAndBody = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Active Lifestyle</Text>
                <Text color='#12284c' cursor='pointer'>Bath & Shower</Text>
                <Text color='#12284c' cursor='pointer'>Body Moisturizers</Text>
                <Text color='#12284c' cursor='pointer'>Hand & Foot Care</Text>
                <Text color='#12284c' cursor='pointer'>Intimate Care</Text>
                <Text color='#12284c' cursor='pointer'>Personal Care</Text>
                <Text color='#12284c' cursor='pointer'>Pre & Postnatal care</Text>
                <Text color='#12284c' cursor='pointer'>Sun Care</Text>
                <Text color='#12284c' cursor='pointer'>Tanning & Bronzing</Text>
                <Text color='#12284c' cursor='pointer'>Tools & Accessories</Text>
                <Text color='#12284c' cursor='pointer'>Value & Gift Sets</Text>
                <Text color='#12284c' cursor='pointer'>Vitamins & Supplements</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>African Botanics</Text>
                <Text color='#12284c' cursor='pointer'>Corpus</Text>
                <Text color='#12284c' cursor='pointer'>Costa Brazil</Text>
                <Text color='#12284c' cursor='pointer'>Fresh</Text>
                <Text color='#12284c' cursor='pointer'>Fur</Text>
                <Text color='#12284c' cursor='pointer'>Hum Nutrition</Text>
                <Text color='#12284c' cursor='pointer'>Molton Brown</Text>
                <Text color='#12284c' cursor='pointer'>St. Tropez</Text>
                <Text color='#12284c' cursor='pointer'>Supergoop!</Text>
                <Text color='#12284c' cursor='pointer'>Tan Luxe</Text>
                <Text color='#12284c' cursor='pointer'>The Nue Co</Text>
                <Text color='#12284c' cursor='pointer'>vVardis</Text>
                <Text color='#12284c' cursor='pointer'>WelleCo</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Summer Body Ready</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Products that reduce cellulite, stop bloating, and more!</Text>
            </Box>
        </>)
}