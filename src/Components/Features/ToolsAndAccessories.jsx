import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop6.avif';

export const ToolsAndAccessories = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Bath & Body Tools</Text>
                <Text color='#12284c' cursor='pointer'>Hair Brushes</Text>
                <Text color='#12284c' cursor='pointer'>Hair Hot Tools</Text>
                <Text color='#12284c' cursor='pointer'>Makeup Brushes & Tools</Text>
                <Text color='#12284c' cursor='pointer'>Makeup Accessories</Text>
                <Text color='#12284c' cursor='pointer'>Skin Care Tools</Text>
                <Text color='#12284c' cursor='pointer'>Value Sets & Gifts</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Dermaflash</Text>
                <Text color='#12284c' cursor='pointer'>FOREO</Text>
                <Text color='#12284c' cursor='pointer'>GHD</Text>
                <Text color='#12284c' cursor='pointer'>HairMax</Text>
                <Text color='#12284c' cursor='pointer'>Jenny Patinkin</Text>
                <Text color='#12284c' cursor='pointer'>Mason Pearson</Text>
                <Text color='#12284c' cursor='pointer'>MZ Skin</Text>
                <Text color='#12284c' cursor='pointer'>NuFace</Text>
                <Text color='#12284c' cursor='pointer'>Slip</Text>
                <Text color='#12284c' cursor='pointer'>Solawave</Text>
                <Text color='#12284c' cursor='pointer'>T3</Text>
                <Text color='#12284c' cursor='pointer'>The Loght Salon</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Summer Self-Care Tools</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Add these tools to your wellness routine!</Text>
            </Box>
        </>)
}