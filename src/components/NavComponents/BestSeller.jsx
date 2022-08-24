import {Flex, Box, Text} from '@chakra-ui/react';

export const BestSeller = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>skin care</Text>
                <Text color='#12284c' cursor='pointer'>Makeup</Text>
                <Text color='#12284c' cursor='pointer'>Bath & Body</Text>
                <Text color='#12284c' cursor='pointer'>Hair</Text>
                <Text color='#12284c' cursor='pointer'>Fragrance</Text>
                <Text color='#12284c' cursor='pointer'>Tools & Accessories</Text>
                <Text color='#12284c' cursor='pointer'>Men's</Text>
                <Text color='#12284c' cursor='pointer'>Mini & Travel</Text>
                <Text color='#12284c' cursor='pointer'>Gifts</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Chantecaille</Text>
                <Text color='#12284c' cursor='pointer'>Dr. Barbara Sturm</Text>
                <Text color='#12284c' cursor='pointer'>La Mer</Text>
                <Text color='#12284c' cursor='pointer'>Lune + Aster</Text>
                <Text color='#12284c' cursor='pointer'>M-61</Text>
                <Text color='#12284c' cursor='pointer'>Oribe</Text>
                <Text color='#12284c' cursor='pointer'>ReVive</Text>
                <Text color='#12284c' cursor='pointer'>SkinCeuticals</Text>
                <Text color='#12284c' cursor='pointer'>Trish McEvoy</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hydraboost_cream_303x303.jpg?v=1656523344' alt='Blue Mercury'/>
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>M-61 Hydraboost® Cream</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Our best-selling face cream with peptides, vitamin B5 & tamarind</Text>
            </Box>
        </>)
}