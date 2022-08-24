import {Flex, Box, Text} from '@chakra-ui/react';

export const Wellness = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Active Lifestyle</Text>
                <Text color='#12284c' cursor='pointer'>Aromatherapy</Text>
                <Text color='#12284c' cursor='pointer'>Bath Salt & Soak</Text>
                <Text color='#12284c' cursor='pointer'>Candles</Text>
                <Text color='#12284c' cursor='pointer'>Conscious Beauty</Text>
                <Text color='#12284c' cursor='pointer'>Facial Rollers & Massage</Text>
                <Text color='#12284c' cursor='pointer'>High-Tech Tools</Text>
                <Text color='#12284c' cursor='pointer'>Intimate Care</Text>
                <Text color='#12284c' cursor='pointer'>Pre & Postnatal Care</Text>
                <Text color='#12284c' cursor='pointer'>Stress & Sleep</Text>
                <Text color='#12284c' cursor='pointer'>Sustainable Beauty</Text>
                <Text color='#12284c' cursor='pointer'>Vitamins & Supplements</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Alo</Text>
                <Text color='#12284c' cursor='pointer'>Aromatherapy Associates</Text>
                <Text color='#12284c' cursor='pointer'>Bala</Text>
                <Text color='#12284c' cursor='pointer'>Costa Brazil</Text>
                <Text color='#12284c' cursor='pointer'>Foreo</Text>
                <Text color='#12284c' cursor='pointer'>Fur</Text>
                <Text color='#12284c' cursor='pointer'>Hum Nutrition</Text>
                <Text color='#12284c' cursor='pointer'>Larq</Text>
                <Text color='#12284c' cursor='pointer'>Naturopathica</Text>
                <Text color='#12284c' cursor='pointer'>Odacite</Text>
                <Text color='#12284c' cursor='pointer'>OSEA</Text>
                <Text color='#12284c' cursor='pointer'>Resore</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/wellness_nav_BAL_303x303.jpg?v=1651871115' alt='Blue Mercury'/>
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Summer Self-Care Tools</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Add these tools to your wellness routine</Text>
            </Box>
        </>)
}