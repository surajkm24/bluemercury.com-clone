import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Carousel } from '@trendyol-js/react-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { data } from '../data/newArrivalData.js';
import { useNoOfCards } from '../Hooks/useNoOfCards';

export const NewArrivals = () => {
    const { total } = useNoOfCards();
    return (
        <Box mt={'45px'} mb='20px'>
            <Heading cursor='pointer' textAlign='center' fontSize='28px' color='#12284C' fontWeight={200} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif'>
                NEW ARRIVALS
            </Heading>
            <Box w={{ base: "90vw", md: "95vw", lg: "90vw" }} m='50px auto 0px'>
                <Carousel show={total} responsive={true} slide={total} transition={0.5} swiping={true} useArrowKeys={true} rightArrow={<ChevronRightIcon mt='10vw' boxSize='70px' cursor='pointer' />} leftArrow={<ChevronLeftIcon mt='10vw' boxSize='70px' cursor='pointer' />}>
                    {data.map((item) => <Box key={item['ProductCard__ImageWrapper href']} textAlign='center'>
                        <Image width={{base:"80%",lg:'90%'}} src={item['ProductCard__Image src']} alt='' />
                        <Text color='#12284C' fontWeight={500} fontSize='15px' letterSpacing='1px'>{item['ProductCard__Brand'].toUpperCase()}</Text>
                        <Text color='#12284C' width={{ base: "90%", md: '80%' }} margin='auto' fontSize='15px'>{item['ProductCard__Title']}</Text>
                        <Text color='#12284C'>{item["ProductCard__Price"]}</Text>
                    </Box>)}
                </Carousel>
            </Box>
        </Box>
    )
}