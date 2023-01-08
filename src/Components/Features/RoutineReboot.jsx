import { Popover, PopoverTrigger, PopoverContent, PopoverBody, Flex, Box, Text } from '@chakra-ui/react';
import logo1 from '../../assets/features/rr1.avif';
import logo2 from '../../assets/features/rr2.avif';

export const RoutineReboot = () => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Text _hover={{ borderColor: "black", color: "#12284c", fontWeight: "400" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'
                    borderBottom='2px solid white'  >ROUTINE REBOOT</Text>
            </PopoverTrigger>
            <PopoverContent w='100vw' mt='-5px'>
                <PopoverBody >
                    <Flex justifyContent='center' my='15px'>
                        <Box pr='35px' cursor='pointer'>
                            <img src={logo1} alt='Routine Reboot' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Shop All Routines</Text>
                        </Box>
                        <Box cursor='pointer' >
                            <img src={logo2} alt='Routine Reboot' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>The "Extend Your Summer Glow" Routine</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Ward off dullness and boost your glow from head to toe</Text>
                        </Box>
                        <Flex direction='column' gap='5px' fontSize='17px' >
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY ROUTINE</Text>
                            <Text color='#12284c' cursor='pointer'>Shop All</Text>
                            <Text color='#12284c' cursor='pointer'>Back To School</Text>
                            <Text color='#12284c' cursor='pointer'>Extend Your Summer Glow</Text>
                            <Text color='#12284c' cursor='pointer'>Get Rid of Summer Sun Damage</Text>
                            <Text color='#12284c' cursor='pointer'>Hydration Head-to-Toe</Text>
                            <Text color='#12284c' cursor='pointer'>#IWokeUpLikeThis</Text>
                            <Text color='#12284c' cursor='pointer'>Out The Door in Five</Text>
                        </Flex>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}