import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop9.avif';

export const Men = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Bath & Body</Text>
                <Text color='#12284c' cursor='pointer'>Fragrance & Cologne</Text>
                <Text color='#12284c' cursor='pointer'>Hair & Grooming</Text>
                <Text color='#12284c' cursor='pointer'>Shaving</Text>
                <Text color='#12284c' cursor='pointer'>Skin Care</Text>
                <Text color='#12284c' cursor='pointer'>valu Sets & Gifts</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px'>
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>Acqua di Parma</Text>
                <Text color='#12284c' cursor='pointer'>Augustinus Bader</Text>
                <Text color='#12284c' cursor='pointer'>Diptyque</Text>
                <Text color='#12284c' cursor='pointer'>Dr. Barbara Sturm</Text>
                <Text color='#12284c' cursor='pointer'>Jack Black</Text>
                <Text color='#12284c' cursor='pointer'>Kiehl's Since 1851</Text>
                <Text color='#12284c' cursor='pointer'>La mer</Text>
                <Text color='#12284c' cursor='pointer'>Molton Brown</Text>
                <Text color='#12284c' cursor='pointer'>Oribe</Text>
                <Text color='#12284c' cursor='pointer'>R+Co</Text>
                <Text color='#12284c' cursor='pointer'>SkinCeuticals</Text>
                <Text color='#12284c' cursor='pointer'>Tom Ford</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Just For Men</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Grooming products for the perfect get-ready routine</Text>
            </Box>
        </>)
}