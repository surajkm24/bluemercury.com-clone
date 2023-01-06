import React from 'react'
import { Box, Flex, Image, Text, Highlight } from '@chakra-ui/react';

const imgs = ["https://cdn.shopify.com/s/files/1/0283/0185/2747/files/jan-resolutions-routines-hero-mob.jpg?v=1671727969&width=400", "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/jan-resolutions-routines-hero-mob.jpg?v=1671727969&width=900", "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/jan-resolutions-routine-hero-des_1600x.jpg?v=1671727968"]

export const SlideOne = ({ slide }) => {
    return (
        <>
            <Flex position='relative' display={slide === 1 ? "flex" : "none"}>
                <Image src={imgs[2]} w='100%' display={{ base: "none", md: "block" }} />
                <Image src={imgs[1]} w='100%' display={{ base: "none", sm: "block", md: "none" }} />
                <Image src={imgs[0]} w='100%' display={{ base: "block", sm: "none" }} />
                <Box position='absolute' textAlign={'center'} w={{ md: "35%" }} top={{ md: "10%" }}
                    left={{ md: "3%" }} bottom={{ base: "7vw", sm: "12vw", md: "0px" }} >
                    <Text style={{ color: "#12284c", letterSpacing: "1px", fontWeight: "300" }} fontSize={{ base: "15px", sm: "24px", md: "1.6vw" }}>
                        <Highlight query='REBOOT' styles={{ fontWeight: 500 }} >
                            ROUTINE REBOOT
                        </Highlight>
                    </Text>
                    <Text style={{ color: "#12284c", letterSpacing: "1px", fontWeight: "300" }} fontSize={{ base: "15.5px", sm: "26px", md: "1.9vw" }}>
                        THE
                    </Text>
                    <Text style={{ color: "#12284c", letterSpacing: "1px", fontWeight: "550" }} fontSize={{ base: "17px", sm: "29px", md: "2vw" }}>
                        EXTEND YOUR SUMMER GLOW
                    </Text>
                    <Text style={{ color: "#12284c", letterSpacing: "1px", fontWeight: "300" }}
                        fontSize={{ base: "15.5px", sm: "26px", md: "1.9vw" }}>
                        ROUTINE
                    </Text>
                    <Text style={{ color: "#12284c", fontWeight: "400" }} fontSize={{ base: "13px", sm: "17px", md: "1.4vw" }} w={{ base: "90%", sm: "55%", md: "100%" }} mx='auto'>
                        Proper pre-bed beauty prep will not only help you rest easy, but also simplify your AM routine. With just a few advance steps, you’ll hop out of bed looking bright-eyed, radiant and ready to go.
                    </Text>
                    <Text style={{ marginTop: "2%", color: "#12284c", letterSpacing: "1px", textDecoration: 'underline', textDecorationColor: "#12284c" }} fontWeight={700}
                        fontSize={{ base: "14px", sm: "18px", md: "1.2vw" }}>
                        SHOP NOW
                    </Text>
                </Box>
            </Flex>
        </>
    )
}
