import { Box, Text, Image } from "@chakra-ui/react"
import { Carousel } from '@trendyol-js/react-carousel';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react'
import { data } from '../data/nestData.js';

export const NestDrawer = ({ isOpen, onClose }) => {
    const [slide, setSlide] = useState(1);

    return (
        <Drawer
            isOpen={isOpen}
            placement='bottom'
            onClose={onClose}
          
        >
            <DrawerOverlay />
            <DrawerContent h='fit-content'>
                <DrawerCloseButton />
                <DrawerHeader textAlign='center' color='#12284c'>SHOP THE LOOK</DrawerHeader>
                <DrawerBody>
                    <Box width='80%' bg='white' textAlign='center' position='relative' m='auto'>
                        <Carousel responsive={true} show={1} slide={1} transition={0.5} rightArrow={<ChevronRightIcon mt='25vw' boxSize='25px' cursor='pointer' onClick={() => setSlide(prev => prev === 1 ? 2 : 1)} />} leftArrow={<ChevronLeftIcon mt='25vw' boxSize='25px' cursor='pointer' onClick={() => setSlide(prev => prev === 2 ? 1 : 2)} />}>
                            {data.map(item => <Box key={item.image} width='100%'>
                                <Box width='60%' margin='0px auto' height='40%'>
                                    <Image width='100%' src={item.image} alt='' margin='auto' />
                                </Box>
                                <Text color='#12284C' fontWeight='500'>{item.brand}</Text>
                                <Text color='#12284C' fontWeight='400' mt='15px'>{item.title}</Text>
                                <Text color='#12284C' fontWeight='400'>{item.price}</Text>
                                <Box display='flex' alignItems='center' justifyContent='center' color='#12284C'><StarIcon boxSize='13px' /><StarIcon boxSize='13px' /><StarIcon boxSize='13px' /><StarIcon boxSize='13px' /><StarIcon boxSize='13px' />{`(${item.rating})`}</Box>
                            </Box>)}
                        </Carousel>
                        <Box display='flex' justifyContent='flex-end' gap='15px' position='absolute' bottom='-3vw' left='45%'>
                            <Box w='12px' h='12px' bg={slide === 1 ? 'black' : "white"} border='1px solid black' borderRadius='50%'></Box>
                            <Box w='12px' h='12px' bg={slide === 2 ? 'black' : "white"} border='1px solid black' borderRadius='50%'></Box>
                        </Box>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}