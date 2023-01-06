import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'
import { Child } from './Child'
import { ChildAccordion } from './ChildAccordion'

export const AccordionListItem = ({ item }) => {
    return (
        <AccordionItem border='none'>
            <AccordionButton>
                <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                    {item.title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                {item?.children?.map((child, i) =>
                    child?.type === 'child' ? (
                        <Child title={child.title} key={i + 1} />
                    ) : (
                        <ChildAccordion child={child} key={i + 1} />
                    )
                )}
            </AccordionPanel>
        </AccordionItem>
    )
}