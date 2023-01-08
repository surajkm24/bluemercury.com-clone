import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop3.avif';

export const Hair = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Brushes & Accessories</Text>
                <Text color='#12284c' cursor='pointer'>Color Care</Text>
                <Text color='#12284c' cursor='pointer'>Hair Loss & Thinning</Text>
                <Text color='#12284c' cursor='pointer'>Hair Tools</Text>
                <Text color='#12284c' cursor='pointer'>Hair Treatment</Text>
                <Text color='#12284c' cursor='pointer'>Shampoo & Conditioner</Text>
                <Text color='#12284c' cursor='pointer'>Styling Products</Text>
                <Text color='#12284c' cursor='pointer'>Vitamins & Suplements</Text>
                <Text color='#12284c' cursor='pointer'>Value & Gift Sets</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Boucleme</Text>
                <Text color='#12284c' cursor='pointer'>Bumble and bumble</Text>
                <Text color='#12284c' cursor='pointer'>Christophe Robin</Text>
                <Text color='#12284c' cursor='pointer'>Drybar</Text>
                <Text color='#12284c' cursor='pointer'>Dyson</Text>
                <Text color='#12284c' cursor='pointer'>Holy Curls</Text>
                <Text color='#12284c' cursor='pointer'>Living Proof</Text>
                <Text color='#12284c' cursor='pointer'>Moroccanoil</Text>
                <Text color='#12284c' cursor='pointer'>Olaplex</Text>
                <Text color='#12284c' cursor='pointer'>Oribe</Text>
                <Text color='#12284c' cursor='pointer'>R+Co</Text>
                <Text color='#12284c' cursor='pointer'>Rahua</Text>
                <Text color='#12284c' cursor='pointer'>Virtue</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>New to Bluemercury: Sunday II Sunday</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Haircare for women who sweat</Text>
            </Box>
        </>)
}