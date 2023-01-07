import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo1 from '../../assets/s21.webp';
import logo2 from '../../assets/s22.webp';

const imgs = [logo1, logo2];

export const SlideTwo = ({ slide }) => {
    return (
        <>
            <Flex position='relative' display={slide === 2 ? "flex" : "none"}>
                <Image src={imgs[0]} w='100%' display={{ base: "none", md: "block" }} />
                <Image src={imgs[1]} w='100%' display={{ base: "block", md: "none" }} />
                <Box position='absolute' textAlign={{ base: "center", md: 'left' }} w={{ md: "40%" }} top={{ md: "10%" }}
                    left={{ md: "10px" }} bottom={{ base: "7vw", sm: "12vw", md: "0px" }} >
                    <Text style={{ color: "#12284c", letterSpacing: "1px", fontWeight: "500" }}
                        fontSize={{ base: "18px", sm: "30px", md: "3vw" }}>
                        DEW DROPS
                    </Text>
                    <Text style={{ color: "#12284c", fontWeight: "400" }} fontSize={{ base: "14.3px", sm: "3.5vw", md: "1.7vw" }} w={{ base: "85%", sm: "55%", md: "100%" }} mx='auto'>
                        Check out our favorite new and bestselling serums, lotions and lightweight creams, all of which hydrate beautifully without feeling the least bit heavy on your skin.
                    </Text>
                    <Text style={{ marginTop: "2%", color: "#12284c", letterSpacing: "1px", textDecoration: 'underline', textDecorationColor: "#12284c" }} fontWeight={700}
                        fontSize={{ base: "14px", sm: "18px", md: "1.4vw" }} cursor='pointer'>
                        SHOP NOW
                    </Text>
                </Box>
            </Flex>
        </>
    )
}
