import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button } from '@chakra-ui/react'

export const ChildAccordion = ({ child }) => {
    return (
        <AccordionItem border='none'>
            <AccordionButton>
                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                    {child.title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                {
                    child?.children?.map((item, i) => (
                        <Box key={i + 1}>
                            <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>{item.title}</Button>
                        </Box>
                    ))
                }
            </AccordionPanel>
        </AccordionItem>
    )
}