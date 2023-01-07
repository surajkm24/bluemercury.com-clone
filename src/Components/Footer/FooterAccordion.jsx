import { Box, Button, Accordion } from '@chakra-ui/react';
import { AccordionItems } from './AccordionItems';

export const FooterAccordion = () => {
    return (
        <Box display={{ base: "block", lg: "none" }}>
            <Accordion allowToggle allowMultiple>
                <AccordionItems />
                <Box>
                    <Button fontWeight='400' color='#12284c' _hover='white' variant='ghost'>
                        TERMS OF SERVICE</Button>
                </Box>
                <Box>
                    <Button fontWeight='400' color='#12284c' _hover='white' variant='ghost'>
                        REFUND POLICY
                    </Button>
                </Box>
            </Accordion>
        </Box>
    )
}