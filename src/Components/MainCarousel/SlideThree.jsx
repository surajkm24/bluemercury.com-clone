import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const imgs = ["//cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-mob-2_400x.jpg?v=1659557535", "//cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-des_1300x.jpg?v=1659557146 1300w"]

export const SlideThree = ({ slide }) => {
    return (
        <>
            <Flex position='relative' display={slide === 3 ? "flex" : "none"}>
                <Image src={imgs[1]} w='100%' display={{ base: "none", md: "block" }} />
                <Image src={imgs[0]} w='100%' display={{ base: "block", md: "none" }} />
                <Box position='absolute' textAlign={{ base: 'center', md: "left" }}
                    w={{ md: "35%" }} top={{ md: "10%" }}
                    left={{ md: "10px" }} bottom={{ base: "7vw", sm: "12vw", md: "0px" }} >
                    <Text style={{ color: "#12284c", letterSpacing: "1px", fontWeight: "500" }}
                        fontSize={{ base: "18px", sm: "22px", md: "1.8vw" }} marginBottom={{ sm: '-10px' }}>
                        LUNE + ASTER
                    </Text>
                    <Text style={{ color: "#12284c", letterSpacing: "1px", fontWeight: "500" }}
                        fontSize={{ base: "18px", sm: "30px", md: "3vw" }}>
                        Dusk + Shadows
                    </Text>
                    <Text style={{ color: "#12284c", fontWeight: "400" }} fontSize={{ base: "14.3px", sm: "19px", md: "1.9vw" }} w={{ base: "85%", sm: "55%", md: "100%" }} mx='auto'>
                        This new pallete features five universal, sunset inspired shades in matte and shimmer finishes, so you can create easily an alluring eye look!
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
