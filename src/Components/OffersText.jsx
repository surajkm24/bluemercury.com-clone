import { Box, Text, ScaleFade } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

export const OffersText = () => {
    const [slide, setSlide] = useState({ first: true, second: false, third: false });
    const slideRef = useRef(null);

    useEffect(() => {
        slideRef.current = setInterval(() => {
            setSlide(prev => {
                if (prev.first) {
                    return { ...prev, first: false, second: true, third: false }
                }
                else if (prev.second) {
                    return { ...prev, first: false, second: false, third: true }
                }
                else {
                    return { ...prev, first: true, second: false, third: false }
                }
            })
        }, 4000)
        return () => {
            clearInterval(slideRef.current)
        }
    }, [])
    return <>
        <Box bg='#12284c' py='7px' mt='10px' >
            <ScaleFade initialScale={0.4} in={slide.first} direction='right' style={{ display: slide.first ? 'block' : "none" }}>
                <Text fontSize='14px' letterSpacing='1px' color='white' fontWeight='500' width='fit-content' m='auto'>Free Gifts With Purchase. Browse Now &gt;</Text>
            </ScaleFade>
            <ScaleFade initialScale={0.4} in={slide.second} direction='right' style={{ display: slide.second ? 'block' : "none" }}>
                <Text fontSize='14px' letterSpacing='1px' color='white' fontWeight='500' width='fit-content' m='auto'>Free Samples With All Orders</Text>
            </ScaleFade>
            <ScaleFade initialScale={0.4} in={slide.third} direction='right' style={{ display: slide.third ? 'block' : "none" }}>
                <Text fontSize='14px' letterSpacing='1px' color='white' fontWeight='500' width='fit-content' m='auto'>Free Shipping for BlueRewards Members</Text>
            </ScaleFade>
        </Box>
    </>
}