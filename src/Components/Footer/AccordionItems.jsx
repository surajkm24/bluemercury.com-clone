import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button } from '@chakra-ui/react';
import { footerData } from '../../data/footerData';

export const AccordionItems = () => {
    return (
        <>
            {
                footerData.map((item) => (
                    <AccordionItem border='none' color='#12284c' key={item.title}>
                        <AccordionButton>
                            <Box textAlign='left' flex='1'>
                                {item.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            {item?.children?.map((ele) => (
                                <Box key={ele + Date.now()}>
                                    <Button fontSize='14px' fontWeight='500' color='#12284c'
                                        _hover='white' variant='ghost' letterSpacing='1px'
                                        textTransform={'uppercase'}>
                                        {ele}
                                    </Button>
                                </Box>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                ))
            }
        </>
    )
}