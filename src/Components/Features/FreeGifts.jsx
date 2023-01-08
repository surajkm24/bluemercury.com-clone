import { Box, Text } from '@chakra-ui/react';
import logo1 from '../../assets/features/shop131.avif';
import logo2 from '../../assets/features/shop132.avif';

export const FreeGifts = () => {

    return (
        <>
            <Box cursor='pointer'>
                <img src={logo1} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Free Gifts With Purchase</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Explore complimentary products</Text>
            </Box>
            <Box cursor='pointer'>
                <img src={logo2} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Offers and Promotions</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Don't miss out! Discover the latest deals</Text>
            </Box>
        </>)
}