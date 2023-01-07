import { Box, Heading, Text, Flex, Image, Show, Hide, useDisclosure } from "@chakra-ui/react"
import { Carousel } from '@trendyol-js/react-carousel';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { NestDrawer } from "./NestDrawer";
import { data } from '../data/nestData.js';

export const NewProductNest = () => {
    const [slide, setSlide] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg='#dad0dc' py={['15px', '20px', '25px', '30px', '45px']} >
            <Heading cursor='pointer' textAlign='center' fontSize='28px' color='#12284C' fontWeight={200} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif'>NEW! FROM NEST NEW YORK</Heading>
            <Text textAlign='center' px={['4%', '7%', '13.5%', '21.5%', '23%']} fontWeight='350' mt='15px' color='#12284C'>This fall candle captures the sweet, woody aroma of freshly fallen autumn leaves with wild plum and cinnamon wrapped in the warmth of patchouli leaf and cashmere wood.</Text>
            <Flex mt='20px' mb='35px' justifyContent='space-between' px={[null, null, '14%', '20%']}
                display={{ md: "flex", base: "none" }}>
                <Box width='47%'>
                    <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/TABBED_-_nest_pumpkin_and_plum_600x.progressive.jpg?v=1661282031' alt='' />
                </Box>
                <Box width='47%' bg='white' textAlign='center' position='relative'>
                    <Carousel responsive={true} show={1} slide={1} transition={0.5} rightArrow={<ChevronRightIcon mt='15vw' boxSize='25px' cursor='pointer' onClick={() => setSlide(prev => prev === 1 ? 2 : 1)} />} leftArrow={<ChevronLeftIcon mt='15vw' boxSize='25px' cursor='pointer' onClick={() => setSlide(prev => prev === 2 ? 1 : 2)} />}>
                        {data.map(item => <Box key={item.image} width='100%'>
                            <Box width='60%' margin='0px auto' height='40%'>
                                <Image width='100%' src={item.image} alt='' margin='auto' />
                            </Box>
                            <Text color='#12284C' fontWeight='500'>{item.brand}</Text>
                            <Text color='#12284C' fontWeight='300' mt='15px'>{item.title}</Text>
                            <Text color='#12284C' fontWeight='300'>{item.price}</Text>
                            <Box display='flex' alignItems='center' justifyContent='center' color='#12284C'><StarIcon boxSize='13px' /><StarIcon boxSize='13px' /><StarIcon boxSize='13px' /><StarIcon boxSize='13px' /><StarIcon boxSize='13px' />{`(${item.rating})`}</Box>
                        </Box>)}
                    </Carousel>
                    <Box display='flex' justifyContent='flex-end' gap='15px' position='absolute' bottom='-3vw' left='45%'>
                        <Box w='12px' h='12px' bg={slide === 1 ? 'black' : "#dad0dc"} border='1px solid black' borderRadius='50%'></Box>
                        <Box w='12px' h='12px' bg={slide === 2 ? 'black' : "#dad0dc"} border='1px solid black' borderRadius='50%'></Box>
                    </Box>
                </Box>
            </Flex>
            <Box mt='20px' display={{ md: "none", base: "block" }}>
                <Box px='10%'>
                    <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/TABBED_-_nest_pumpkin_and_plum_600x.progressive.jpg?v=1661282031' alt='' />
                </Box>
                <Heading onClick={onOpen} cursor='pointer' mt='20px' textAlign='center' fontSize='17px' color='#12284C' textDecoration={'underline 2px'} fontWeight={550} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif'>VIEW PRODUCTS</Heading>
            </Box>
            <NestDrawer isOpen={isOpen} onClose={onClose} />

        </Box>
    )
}