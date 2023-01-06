import React from 'react'
import { Box, Flex, Image, Text, Highlight } from '@chakra-ui/react';
const imgs = ["//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-des_1300x.jpg?v=1660596941 1300w,//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-des_1600x.jpg?v=1660596941", "//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-mob_400x.jpg?v=1660596943"];

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
