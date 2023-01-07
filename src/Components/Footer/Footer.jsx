import { Flex } from "@chakra-ui/react";
import { SubscribeEmail } from "./SubscribeEmail";
import { FooterMain } from "./FooterMain";

export const Footer = () => {

    return <>
        <Flex mt='60px' pt={{ base: "0px", lg: '30px' }} borderTop='1px solid lightgray'
            pb={{ base: "20px", lg: '50px' }}
            justifyContent='space-between' gap={{ lg: '30px' }} px={{ base: "0px", lg: '3vw' }}
            flexDir={{ base: "column", lg: "row" }}>
            <SubscribeEmail />
            <FooterMain />
        </Flex>
    </>
}