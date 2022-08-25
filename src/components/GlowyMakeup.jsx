import { Box, Heading, Image, Text, Show, Hide } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import data from '../data/glowyMakeupData.json';

export const GlowyMakeup = () => {

    return <div style={{ marginTop: "45px",marginBottom:"30px" }}>
        <Heading textAlign='center' fontSize='30px' color='#12284C' fontWeight={200} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif'>DEWY, GLOWY MAKEUP</Heading>
        <Show above='1024px'>
            <div style={{ width: "90vw", margin: "50px auto 0px" }}>
                <Carousel show={4} responsive={true} slide={4} transition={0.5} swiping={true} useArrowKeys={true} rightArrow={<ChevronRightIcon mt='10vw' boxSize='70px' cursor='pointer' />} leftArrow={<ChevronLeftIcon mt='10vw' boxSize='70px' cursor='pointer' />}>
                    {data.map((item) => <Box key={item['ProductCard__ImageWrapper href']} textAlign='center'>
                        <Image width='90%' src={item['ProductCard__Image src']} alt='' />
                        <Text color='#12284C' fontWeight={500} fontSize='15px' letterSpacing='1px'>{item['ProductCard__Brand'].toUpperCase()}</Text>
                        <Text color='#12284C' width='85%' margin='auto' fontSize='15px'>{item['ProductCard__Title']}</Text>
                        <Text color='#12284C'>{item["ProductCard__Price"]}</Text>
                    </Box>)}
                </Carousel>

            </div>
        </Show>
        <Show above='768px'>
            <Hide above='1024px'>
                <div style={{ width: "95vw", margin: "50px auto 0px" }}>
                    <Carousel show={3} responsive={true} slide={3} transition={0.5} swiping={true} useArrowKeys={true} rightArrow={<ChevronRightIcon mt='10vw' boxSize='70px' cursor='pointer' />} leftArrow={<ChevronLeftIcon mt='10vw' boxSize='70px' cursor='pointer' />}>
                        {data.map((item) => <Box key={item['ProductCard__ImageWrapper href']} textAlign='center'>
                            <Image width='80%' src={item['ProductCard__Image src']} alt='' />
                            <Text color='#12284C' fontWeight={500} fontSize='15px' letterSpacing='1px'>{item['ProductCard__Brand'].toUpperCase()}</Text>
                            <Text color='#12284C' width='90%' margin='auto' fontSize='15px'>{item['ProductCard__Title']}</Text>
                            <Text color='#12284C'>{item["ProductCard__Price"]}</Text>
                        </Box>)}
                    </Carousel>

                </div>
            </Hide>
        </Show>
        <Hide above='768px'>
            <div style={{ width: "90vw", margin: "50px auto 0px" }}>
                <Carousel show={2} responsive={true} slide={2} transition={0.5} swiping={true} useArrowKeys={true} rightArrow={<ChevronRightIcon mt='10vw' boxSize='70px' cursor='pointer' />} leftArrow={<ChevronLeftIcon mt='10vw' boxSize='70px' cursor='pointer' />}>
                    {data.map((item) => <Box key={item['ProductCard__ImageWrapper href']} textAlign='center'>
                        <Image width='90%' src={item['ProductCard__Image src']} alt='' />
                        <Text color='#12284C' fontWeight={500} fontSize='15px' letterSpacing='1px'>{item['ProductCard__Brand'].toUpperCase()}</Text>
                        <Text color='#12284C' width='85%' margin='auto' fontSize='15px'>{item['ProductCard__Title']}</Text>
                        <Text color='#12284C'>{item["ProductCard__Price"]}</Text>
                    </Box>)}
                </Carousel>

            </div>
        </Hide>

    </div>
}