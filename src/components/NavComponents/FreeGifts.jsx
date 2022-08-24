import {Flex, Box, Text} from '@chakra-ui/react';

export const FreeGifts = () => {

    return (
        <>
            <Box cursor='pointer'>
                <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Summer_party_gwp_303x303.jpg?v=1654028392' alt='Blue Mercury'/>
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Free Gifts With Purchase</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Explore complimentary products</Text>
            </Box>
            <Box cursor='pointer'>
                <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/wellness_offer_6102417c-7b5d-4a8e-a044-ce9b9dbf0829_303x303.jpg?v=1657118354' alt='Blue Mercury'/>
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Offers and Promotions</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Don't miss out! Discover the latest deals</Text>
            </Box>
        </>)
}