import { Box, Flex, Text, Input, Icon, Show, Hide, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react';

export const Footer = () => {
    return <>
        <Show above='1024px'>
            <Flex mt='60px' pt='30px' borderTop='1px solid lightgray' pb='50px' justifyContent='space-between' gap='30px' px='3vw'>
                <Box>
                    <Text fontSize='16px' color='#466788' fontWeight='400'>Get Expert Beauty Insight & Offers</Text>
                    <Box display='flex' alignItems='center' borderBottom='1px solid black' mt='15px'>
                        <Input placeholder='ENTER EMAIL' p='0px' outline='none' variant='unstyled' />
                        <ArrowForwardIcon boxSize='20px' cursor='pointer' />
                    </Box>
                    <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300' mt='15px'>By continuing, you agree to Bluemercury's</Text>
                    <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300' textDecoration='underline'>Privacy Practices</Text>
                    <Flex alignItems='center' gap='2vw' my='20px'>
                        <Icon cursor='pointer' as={FaTwitter} boxSize='25px' color='#12284c' />
                        <Icon cursor='pointer' as={FaPinterestP} boxSize='23px' color='#12284c' />
                        <Icon cursor='pointer' as={FaFacebookF} boxSize='21px' color='#12284c' />
                        <Icon cursor='pointer' as={FaInstagram} boxSize='24px' color='#12284c' />
                        <Icon cursor='pointer' as={FaYoutube} boxSize='27px' color='#12284c' />
                    </Flex>
                    <Text fontSize='12px' color='#466788' cursor='pointer' fontWeight='300' >Copyright 2022 bluemercury. All Rights Reserved.</Text>
                </Box>
                <Flex gap='2.4vw'>
                    <Box lineHeight='30px'>
                        <Text fontSize='16px' color='#466788' fontWeight='400'>BLUEMERCURY</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Our Company</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Store Locator</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>In Store & Online Events</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Spa Menu</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Careers</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Vendor Submissions</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Diversity & Inclusion</Text>
                    </Box>
                    <Box lineHeight='30px'>
                        <Text fontSize='16px' color='#466788' fontWeight='400'>MY ACCOUNT</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>My Account</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>BlueRewards</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Gift Card Balance Checker</Text>
                    </Box>
                    <Box lineHeight='30px'>
                        <Text fontSize='16px' color='#466788' fontWeight='400'>CUSTOMER SERVICE</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Contact Us</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Help & FAQ</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Shipping, Returns & Exchanges</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Gift Cards</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Offers & Promotions</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Klarna</Text>
                    </Box>
                    <Box lineHeight='30px'>
                        <Text fontSize='16px' color='#466788' fontWeight='400'>RESOURCES</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Terms & Conditions</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Privacy Notice</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Do Not Sell My Personal Information</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>CA Privacy Rights</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Accessibillity</Text>
                        <Text fontSize='14px' color='#466788' cursor='pointer' fontWeight='300'>Affiliate Program</Text>
                    </Box>
                </Flex>
            </Flex>
        </Show>
        <Hide above='1024px'>
            <Box mt='60px' bg='#12284c' color='white' py='20px' px='20px'>
                <Text fontSize='17px' fontWeight='500'>Get Expert Beauty Insight & Offers</Text>
                <Box display='flex' alignItems='center' borderBottom='1px solid white' mt='15px'>
                    <Input placeholder='ENTER EMAIL' p='0px' outline='none' variant='unstyled' _placeholder={{ color: "lightgray" }} />
                    <ArrowForwardIcon boxSize='20px' cursor='pointer' />
                </Box>
                <Text fontSize='15px' display='flex' cursor='pointer' fontWeight='300' mt='15px'>By continuing, you agree to Bluemercury's &nbsp;<Text fontSize='15px' cursor='pointer' fontWeight='300' textDecoration='underline'>Privacy Practices</Text></Text>
                <Flex alignItems='center' gap='6vw' mt='50px'>
                    <Icon cursor='pointer' as={FaTwitter} boxSize='25px' />
                    <Icon cursor='pointer' as={FaPinterestP} boxSize='23px' />
                    <Icon cursor='pointer' as={FaFacebookF} boxSize='21px' />
                    <Icon cursor='pointer' as={FaInstagram} boxSize='24px' />
                    <Icon cursor='pointer' as={FaYoutube} boxSize='27px' />
                </Flex>
            </Box>
            <Box mb='10px'>
                <Accordion allowToggle allowMultiple>
                    <Box>
                        <Button fontWeight='400' color='#12284c' _hover='white' variant='ghost'>BLUEMERCURY</Button>
                    </Box>
                    <AccordionItem border='none' color='#12284c'>
                        <AccordionButton>
                            <Box textAlign='left' flex='1'>
                                BLUEMERCURY
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>OUR COMPANY</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>STORE LOCATOR</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>IN STORE & ONLINE EVENTS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>SPA MENU</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>CAREERS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>VENDOR SUBMISSIONS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>DIVERSITY & INCLUSION</Button>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border='none' color='#12284c'>
                        <AccordionButton>
                            <Box textAlign='left' flex='1'>
                                MY ACCOUNT
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>MY ACCOUNT</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>BLUEREWARDS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>GIFT CARD BALANCE CHECKER</Button>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border='none' color='#12284c'>
                        <AccordionButton>
                            <Box textAlign='left' flex='1'>
                                CUSTOMER SUPPORT
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>CONTACT US</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>HELP & FAQ</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>SHIPPING, RETURNS & EXCHANGES</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>GIFT CARDS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>OFFERS & PROMOTIONS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>KLARNA</Button>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border='none' color='#12284c'>
                        <AccordionButton>
                            <Box textAlign='left' flex='1'>
                               RESOURCES
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>TERMS & CONDITIONS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>PRIVACY NOTICE</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>DO NOT SELL MY PERSONAL INFORMATION</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>CA PRIVACY RIGHTS</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>ACCESSIBILITY</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>AFFILIATE PROGRAM</Button>
                            </Box>
                            <Box>
                                <Button fontSize='14px' fontWeight='500' color='#12284c' _hover='white' variant='ghost' letterSpacing='1px'>COVID-19 UPDATES</Button>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <Box>
                        <Button fontWeight='400' color='#12284c' _hover='white' variant='ghost'>TERMS OF SERVICE</Button>
                    </Box>
                    <Box>
                        <Button fontWeight='400' color='#12284c' _hover='white' variant='ghost'>REFUND POLICY</Button>
                    </Box>
                </Accordion>
            </Box>
        </Hide>
    </>
}