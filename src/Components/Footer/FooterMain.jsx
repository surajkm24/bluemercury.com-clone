import { Flex } from '@chakra-ui/react';
import { FooterAccordion } from './FooterAccordion';
import { OptionsList } from './OptionsList';

export const FooterMain = () => {
    return (
        <>
            <Flex gap='2.4vw' display={{ base: "none", lg: "flex" }}>
                <OptionsList />
            </Flex>
            <FooterAccordion />
        </>
    )
}