import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, Input, InputRightElement, Flex, useDisclosure, Show, Hide, Spacer, Box, Text, Button, Icon, Tooltip, Popover, PopoverArrow, PopoverTrigger, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, Image } from '@chakra-ui/react';
import { AiFillExclamationCircle, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiShoppingBag } from 'react-icons/bi';
import { VscLocation } from 'react-icons/vsc';
import { useState, useRef, useEffect, useContext } from 'react';
// import { SkinCare } from './NavComponents/SkinCare';
// import { Makeup } from './NavComponents/Makeup';
// import { Hair } from './NavComponents/Hair';
// import { BathAndBody } from './NavComponents/BathAndBody';
// import { Fragrance } from './NavComponents/Fragrance';
// import { ToolsAndAccessories } from './NavComponents/ToolsAndAccessories';
// import { HomeAndLifestyle } from './NavComponents/HomeAndLifestyle';
// import { SunCare } from './NavComponents/SunCare';
// import { Men } from './NavComponents/Men';
// import { Gifts } from './NavComponents/Gifts';
// import { BestSeller } from './NavComponents/BestSeller';
// import { Wellness } from './NavComponents/Wellness';
// import { FreeGifts } from './NavComponents/FreeGifts';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react'
// import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { NavDrawer } from './NavDrawer';

export const Navbar = () => {
    const [count, setCount] = useState(1);
    const [showLogo, setShowLogo] = useState(false);
    const { isAuth } = useAuth();
    const { isOpen: isMidNavOpen, onOpen: onMidNavOpen, onClose: onMidNavClose } = useDisclosure();
    const { isOpen: isSmallNavOpen, onOpen: onSmallNavOpen, onClose: onSmallNavClose } = useDisclosure();
    const myRef = useRef();

    window.onscroll = () => {
        myRef.current.offsetTop > 87 ? setShowLogo(true) : setShowLogo(false);
    }
    return <>
        <Flex bg='white' align='center' justify='space-between' py={{ base: "5px", lg: "0px" }}>
            <Button leftIcon={<Icon as={VscLocation} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'
                display={{ base: "none", lg: "flex" }}>
                STORE & SPA LOCATOR
            </Button>
            <NavDrawer />
            <Box width='150px' display={{ base: "flex", lg: 'none' }}>
                <Link to='/'>
                    <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt='' />
                </Link>
            </Box>
            <Flex>
                <Tooltip label='Wishlist'>
                    <Button leftIcon={<Icon as={AiOutlineHeart} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'>
                        <Text display={{ base: "none", lg: "flex" }}>
                            WISHLIST
                        </Text>
                    </Button>
                </Tooltip>
                <Tooltip label='Search'>
                    <Button leftIcon={<SearchIcon boxSize='20px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'
                    display={{ base: "none", md: "flex" }}>
                        <Text display={{ base: "none", lg: "flex" }}>
                            SEARCH
                        </Text>
                    </Button>
                </Tooltip>
                {!isAuth.loggedin && <Tooltip label='Account'>
                    <Link to='/account/login'>
                        <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'
                        display={{ base: "none", md: "flex" }}>
                            <Text display={{ base: "none", lg: "flex" }}>
                                SIGN IN/UP
                            </Text>
                        </Button>
                    </Link>
                </Tooltip>}
                {isAuth.loggedin && <Tooltip label='Account'>
                    <Link to='#'>
                        <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'
                        display={{ base: "none", md: "flex" }}>
                            <Text display={{ base: "none", lg: "flex" }}>
                                ACCOUNT
                            </Text>
                        </Button>
                    </Link>
                </Tooltip>}
                <Tooltip label='Bag'>
                    <Button leftIcon={<Icon as={BiShoppingBag} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'>
                        <Text display={{ base: "none", lg: "flex" }}>
                            BAG
                        </Text>
                    </Button>
                </Tooltip>
            </Flex>
        </Flex>
        <Flex mt='0' justify='center' display={{ lg: "flex", base: "none" }}>
            <Link to='/'>
                <img width='200px' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt='' />
            </Link>
        </Flex>
        <Flex p='10px 10px 20px 10px' display={{ base: "flex", md: "none" }}>
            <Input _placeholder={{ fontFamily: "sans-serif", letterSpacing: "1px", fontWeight: "450", color: "#12284c", opacity: "0.8" }} fontSize='16px' variant='unstyled' placeholder='SEARCH...' />
            <SearchIcon boxSize='22px' cursor='pointer' />
        </Flex>
        {/* <Flex ref={myRef} justifyContent={showLogo ? 'space-between' : 'center'} mt='10px' position='sticky' top='0px' bg='white' alignItems='center' p='5px 0px 5px 15px' zIndex={2}>
                <Box width='150px' display={showLogo ? 'block' : 'none'}>
                    <Link to='/'>
                        <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt='' />
                    </Link>
                </Box>
                <Flex justifyContent='center' gap={showLogo ? [null, null, null, '1.2vw', '2.5vw'] : 9} alignItems='center' cursor='pointer'>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <Text _hover={{ borderBottom: "2px solid black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='500' width={showLogo ? 'fit-content' : null}>SHOP</Text>
                        </PopoverTrigger>
                        <PopoverContent w='100vw' mt='-5px'>
                            <PopoverBody>
                                <Flex my='15px'>
                                    <Flex direction='column' textAlign='left' gap='10px' w='28%' borderRight='1px solid #12284c' boxSizing='border-box' pl='10%' >
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='o.5px' borderRadius='0px' variant='ghost' color={count === 1 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 1 ? '500' : '400'} onMouseEnter={() => setCount(1)}>SKIN CARE</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 2 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 2 ? '500' : '400'} onMouseEnter={() => setCount(2)}>MAKEUP</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 3 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 3 ? '500' : '400'} onMouseEnter={() => setCount(3)}>HAIR</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 4 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 4 ? '500' : '400'} onMouseEnter={() => setCount(4)}>BATH & BODY</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 5 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 5 ? '500' : '400'} onMouseEnter={() => setCount(5)}>FRAGRANCE</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 6 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 6 ? '500' : '400'} onMouseEnter={() => setCount(6)}>TOOLS & ACCESSORIES</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 7 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 7 ? '500' : '400'} onMouseEnter={() => setCount(7)}>HOME & LIFESTYLE</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 8 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 8 ? '500' : '400'} onMouseEnter={() => setCount(8)}>SUN CARE</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 9 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 9 ? '500' : '400'} onMouseEnter={() => setCount(9)}>MEN</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 10 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 10 ? '500' : '400'} onMouseEnter={() => setCount(10)}>GIFTS</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 11 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 11 ? '500' : '400'} onMouseEnter={() => setCount(11)}>BEST SELLER</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 12 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 12 ? '500' : '400'} onMouseEnter={() => setCount(12)}>WELLNESS</Text>
                                        <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count === 13 ? '#12284c' : '#51617c'} fontSize='16px' fontWeight={count === 13 ? '500' : '400'} onMouseEnter={() => setCount(13)}>FREE GIFTS!</Text>
                                    </Flex>
                                    <Flex w='70%' justifyContent='space-evenly'>
                                        {count === 1 ? <SkinCare /> : count === 2 ? <Makeup /> : count === 3 ? <Hair /> : count === 4 ? <BathAndBody /> : count === 5 ?
                                            <Fragrance /> : count === 6 ? <ToolsAndAccessories /> : count === 7 ? <HomeAndLifestyle /> : count === 8 ? <SunCare /> :
                                                count === 9 ? <Men /> : count === 10 ? <Gifts /> : count === 11 ? <BestSeller /> : count === 12 ? <Wellness /> : <FreeGifts />}
                                    </Flex>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <Text _hover={{ borderBottom: "2px solid black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>NEW!</Text>
                        </PopoverTrigger>
                        <PopoverContent w='100vw' mt='-5px'>
                            <PopoverBody>
                                <Flex my='15px' justifyContent='center' gap='4%'>
                                    <Flex direction='column' gap='3px' fontSize='16.5px'>
                                        <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                                        <Text color='#12284c' cursor='pointer'>Shop All</Text>
                                        <Text color='#12284c' cursor='pointer'>Skincare</Text>
                                        <Text color='#12284c' cursor='pointer'>Makeup</Text>
                                        <Text color='#12284c' cursor='pointer'>Hair</Text>
                                        <Text color='#12284c' cursor='pointer'>Bath & Body</Text>
                                        <Text color='#12284c' cursor='pointer'>Fragrance</Text>
                                        <Text color='#12284c' cursor='pointer'>Tools & Accessories</Text>
                                        <Text color='#12284c' cursor='pointer'>Wellness</Text>
                                        <Text color='#12284c' cursor='pointer'>Gifts</Text>
                                        <Text color='#12284c' cursor='pointer'>Wedding Essentials</Text>
                                    </Flex>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_navigation_303x303.jpg?v=1659549528' alt='Blue Mercury' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>New Brand Alert: ZitSticka</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>Treat and prevent all kinds of breakouts</Text>
                                    </Box>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/summer_spectacular_navigation_303x303.jpg?v=1658775534' alt='Blue Mercury' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>The Summer Beauty Spectacular</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>$780+ worth of must-haves for less than $400!</Text>
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <Text _hover={{ borderBottom: "2px solid black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>BRANDS</Text>
                        </PopoverTrigger>
                        <PopoverContent w='100vw' mt='-5px'>
                            <PopoverBody maxWidth='100vw'>
                                <Flex my='15px' justifyContent='center' gap='3%'>
                                    <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>SHOP ALL BRANDS</Text>
                                    <Flex direction='column' gap='2px' fontSize='16.5px'>
                                        <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BEST SELLERS</Text>
                                        <Text color='#12284c' cursor='pointer'>Augustinus Bader</Text>
                                        <Text color='#12284c' cursor='pointer'>Chantecaille</Text>
                                        <Text color='#12284c' cursor='pointer'>diptyque</Text>
                                        <Text color='#12284c' cursor='pointer'>Dr. Barbara Sturm</Text>
                                        <Text color='#12284c' cursor='pointer'>Dyson</Text>
                                        <Text color='#12284c' cursor='pointer'>La Mer</Text>
                                        <Text color='#12284c' cursor='pointer'>Lune + Aster</Text>
                                        <Text color='#12284c' cursor='pointer'>M-61</Text>
                                        <Text color='#12284c' cursor='pointer'>NARS</Text>
                                        <Text color='#12284c' cursor='pointer'>Olaplex</Text>
                                        <Text color='#12284c' cursor='pointer'>Oribe</Text>
                                        <Text color='#12284c' cursor='pointer'>SkinCeuticals</Text>
                                        <Text color='#12284c' cursor='pointer'>Supergoop!</Text>
                                        <Text color='#12284c' cursor='pointer'>TOM FORD</Text>
                                        <Text color='#12284c' cursor='pointer'>Trish McEvoy</Text>
                                        <Text color='#12284c' cursor='pointer' letterSpacing='1px' >VIRTUE</Text>
                                    </Flex>
                                    <Flex direction='column' gap='2px' fontSize='16.5px'>
                                        <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>#NEWATBLUE</Text>
                                        <Text color='#12284c' cursor='pointer'>BalmLabs</Text>
                                        <Text color='#12284c' cursor='pointer'>Boucleme</Text>
                                        <Text color='#12284c' cursor='pointer'>EltaMD</Text>
                                        <Text color='#12284c' cursor='pointer'>Holy Curls</Text>
                                        <Text color='#12284c' cursor='pointer'>L'AVANT</Text>
                                        <Text color='#12284c' cursor='pointer'>Lake & Skye</Text>
                                        <Text color='#12284c' cursor='pointer'>PCA Skin</Text>
                                        <Text color='#12284c' cursor='pointer'>Sana Jardin</Text>
                                        <Text color='#12284c' cursor='pointer'>Sisley-Paris</Text>
                                        <Text color='#12284c' cursor='pointer'>Solawave</Text>
                                        <Text color='#12284c' cursor='pointer'>Sunday II Sunday</Text>
                                        <Text color='#12284c' cursor='pointer'>The Maker</Text>
                                        <Text color='#12284c' cursor='pointer'>VARDIS</Text>
                                        <Text color='#12284c' cursor='pointer'>ZitSticka</Text>
                                    </Flex>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_md_nav_303x303.jpg?v=1656446190' alt='Blue Mercury' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>New to Buemercury: EltaMD</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>Shop the cult-favorite sunscreen brand!</Text>
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <Text _hover={{ borderBottom: "2px solid black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>EXPLORE</Text>
                        </PopoverTrigger>
                        <PopoverContent w='100vw' mt='-5px'>
                            <PopoverBody>
                                <Flex my='15px' justifyContent='center' gap={10}>
                                    <Flex direction='column' gap='5px' fontSize='18px'>
                                        <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>FEATURED</Text>
                                        <Text color='#12284c' cursor='pointer'>Beauty Alfresco</Text>
                                        <Text color='#12284c' cursor='pointer'>Wedding Essentials</Text>
                                        <Text color='#12284c' cursor='pointer'>#ShowUsYourBag</Text>
                                        <Text color='#12284c' cursor='pointer'>The Founders Series</Text>
                                        <Text color='#12284c' cursor='pointer'>Blue Notes</Text>
                                        <Text color='#12284c' cursor='pointer'>Buying Guides</Text>
                                        <Text color='#12284c' cursor='pointer'>Conscious Beauty</Text>
                                        <Text color='#12284c' cursor='pointer' letterSpacing='1px' >MORE</Text>
                                    </Flex>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Wedding_Season_1x1_Blue_Mercury_2208_Alford_7031_303x303.jpg?v=1660140149' alt='Blue Mercury' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Wedding Season Essentials</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>Must-have products for the bridal party and guests!</Text>
                                    </Box>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615' alt='Blue Mercury' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Routine Reboot</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>Explore all beauty routines</Text>
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <Text _hover={{ borderBottom: "2px solid black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>EVENTS</Text>
                        </PopoverTrigger>
                        <PopoverContent w='100vw' mt='-5px'>
                            <PopoverBody>
                                <Flex my='15px' gap={35} justifyContent='center'>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury_303x303_8b06250d-4cc8-431d-8217-688769352c79_303x303.webp?v=1659551087' alt='Blue mercury Masterclass' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Bluemercury Presents: #Masterclass</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>Join us for live virtual shopping events! </Text>
                                    </Box>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_303x303.jpg?v=1657733426' alt='Blue Events' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Complimentary Consultations!</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>Book your one-on-one appointment at your local store</Text>
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <Text _hover={{ borderBottom: "2px solid black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>BLUEREWARDS</Text>
                        </PopoverTrigger>
                        <PopoverContent w='100vw' mt='-5px'>
                            <PopoverBody>
                                <Flex my='15px' justifyContent='center' gap={20}>
                                    <Flex direction='column' gap='5px' fontSize='18px'>
                                        <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>MY ACCOUNT</Text>
                                        <Text color='#12284c' cursor='pointer'>Account Overview</Text>
                                        <Text color='#12284c' cursor='pointer'>My Purchases</Text>
                                        <Text color='#12284c' cursor='pointer'>My BlueRewards</Text>
                                        <Text color='#12284c' cursor='pointer'>My Wishlist</Text>
                                        <Text color='#12284c' cursor='pointer'>Details + Preferences</Text>
                                    </Flex>
                                    <Box cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372' alt='Blue Rewards' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Earn $10 for every $250</Text>
                                        <Text color='#122b4c' opacity='0.8' fontSize='14px'>Free to Join! Learn More &gt; </Text>
                                    </Box>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <Text _hover={{ borderBottom: "2px solid black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>ROUTINE REBOOT</Text>
                        </PopoverTrigger>
                        <PopoverContent w='100vw' mt='-5px'>
                            <PopoverBody >
                                <Flex justifyContent='center' my='15px'>
                                    <Box pr='35px' cursor='pointer'>
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615' alt='Routine Reboot' />
                                        <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Shop All Routines</Text>
                                    </Box>
                                    <Box cursor='pointer' >
                                        <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/extend_your_summer_glow_2_303x303.jpg?v=1659102162' alt='Routine Reboot' />
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
                </Flex>
                <Flex display={showLogo ? 'block' : 'none'}>
                    <Tooltip label='Wishlist'>
                        <Button leftIcon={<Icon as={AiOutlineHeart} boxSize='23px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                    </Tooltip>
                    <Tooltip label='Search'>
                        <Button leftIcon={<SearchIcon boxSize='19px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                    </Tooltip>
                    {!isAuth.loggedin && <Tooltip label='Account'>
                        <Link to='/account/login'>
                            <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'></Button>
                        </Link>
                    </Tooltip>}
                    {isAuth.loggedin && <Tooltip label='Account'>
                        <Link to='#'>
                            <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'></Button>
                        </Link>
                    </Tooltip>}
                    <Tooltip label='Bag'>
                        <Button leftIcon={<Icon as={BiShoppingBag} boxSize='23px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                    </Tooltip>
                </Flex>
</Flex>*/}
        {/* <Show above='768px'>
            <Hide above='1024px'>
                <Flex alignItems='center' padding='5px 0px' position='sticky' top='0px' bg='white' zIndex={2}>
                    <Button variant='ghost' _hover="white" onClick={onMidNavOpen}><HamburgerIcon boxSize='25px' /></Button>
                    <Drawer
                        isOpen={isMidNavOpen}
                        placement='left'
                        onClose={onMidNavClose}
                        size='md'
                    >
                        <DrawerOverlay />
                        <DrawerContent >
                            <DrawerCloseButton />
                            <DrawerHeader>
                                {!isAuth.loggedin && <Tooltip label='Account'>
                                    <Link to='/account/login'>
                                        <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>SIGN IN/UP</Button>
                                    </Link>
                                </Tooltip>}
                                {isAuth.loggedin && <Tooltip label='Account'>
                                    <Link to='#'>
                                        <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>ACCOUNT</Button>
                                    </Link>
                                </Tooltip>}
                            </DrawerHeader>

                            <DrawerBody pb='30px'>
                                <Accordion allowMultiple allowToggle>
                                    <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>ROUTINE REBOOT</Button>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                BRANDS
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL BRANDS</Button>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        BEST SELLERS
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Augustinus Bader</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Chantecaille</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Dr. Barbara Sturm</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>dyptique</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Dyson</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>La Mer</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Lune + Aster</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>M-61</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>NARS</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Olaplexs</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Oribe</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>SkinCeuticals</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Tom Ford</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Trish McEvoy</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>VIRTUE</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        #NEWATBLUE
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>BalmLabs</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Boucleme</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>EltaMD</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Holy Curls</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>L'AVANT</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Lake & Skye</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>PCA Skin</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Sana Jardin</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Sisley-Paris</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Solawave</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Sunday || Sunday</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>The Maker</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>vVARDIS</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>ZitSticka</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        CONSCIOUS BEAUTY
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Hum Nutrition</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Fur</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Indie Lee</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Kjaer Weis</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>lilah b.</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Odacite</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>OSEA</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Tata Harper</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>WelleCo</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>NEW!</Button>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                BEST SELLERS
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SHOP ALL</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SKIN CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH & BODY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FRAGRANCE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOOLS & ACCESSORIES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MEN'S</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUN CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MINI & TRAVEL</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFTS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                SKIN CARE
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL SKIN CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CLEANSERS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>EXFOLIATORS & PEELS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>EYE CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LIP CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MASKS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MOISTURIZERS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUN CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOOLS & DEVICES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TREATMENT & SERUMS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                MAKEUP
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL MAKEUP</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BRUSHES & TOOLS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>EYES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FACE & CHEEK</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LIPS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP BAGS & ACCESSORIES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP REMOVERS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>NAILS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PALETTES & SETS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                HAIR
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL HAIR</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BRUSHES & ACCESSORIES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>COLOR CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR LOSS & THINNING</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR TOOLS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR TREATMENTS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SHAMPOO & CONDITIONERS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>STYLING PRODUCTS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                BATH & BODY
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL BATH & BODY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ACTIVE LIFESTYLE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH & SHOWER</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BODY MOISTURIZERS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAND & FOOT CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>INTIMATE CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PERSONAL CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PRE & POSTNATAL CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUN CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TANNING & BRONZING</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOOLS & ACCESSORIES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                FRAGRANCE
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL FRAGRANCE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>AROMATHERAPY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BODY SPRAY & HAIR MIST</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CANDLES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>COLOGNE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PERFUME</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>DIFFUSERS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ROLLERBALLS & TRAVEL SIZE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ROOM & PILLOW SPRAYS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                TOOLS & ACCESSORIES
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL TOOLS & ACCESSORIES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH & BODY TOOLS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR BRUSHES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR HOT TOOLS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HIGH TECH TOOLS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP BRUSHES & TOOLS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP ACCESSORIES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SKIN CARE TOOLS & DEVICES</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                HOME & LIFESTYLE
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL HOME & LIFESTYLE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ACTIVE LIFESTYLE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>AROMATHERAPY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CLEANING & HOME CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAND SOAP AND SANITIZERS</Button>
                                            </Box>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        HOME FRAGRANCE
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Home Fragrance</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Candles</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Diffusers</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Room & Pillow Sprays</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SLEEP & STRESS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOWELS & BATH ACCESSORIES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>WELLNESS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                SUN CARE
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL SUN CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BODY SUNSCREEN</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FACE SUNSCREEN</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LIP SUNSCREEN</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SELF TANNING & BRONZING</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                MEN
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL MEN</Button>
                                            </Box>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        BATH & BODY
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Bath & Body</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Wash</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Lotion</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Deodorant</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Hand Cream</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Shaving</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        FRAGRANCE & COLOGNE
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Fragrance</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Aftershave</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Spray</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Cologne</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        HAIR & GROOMING
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Hair & Grooming</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Beard Oils</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Shampoos & Conditioners</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Styling Products</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Thinning Hair & Hair Loss</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        SHAVING
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Shaving</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Aftershave</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Beard Oils</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Shaving Cream</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        SKIN CARE
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Skin Care</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Eye Cream</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Moisturizer</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Treatment & Serums</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Fashwash</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Lip Balms</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Scrubs & Exfoliators</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                GIFTS
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL GIFTS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFTS BY CATEGORY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFTS BY PRICE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFT CARDS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFT SETS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LUXURY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>WEDDING PARTY GIFTS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>WELLNESS GIFTS</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                WELLNESS
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SHOP ALL</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ACTIVE LIFESTYLE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>AROMATHERAPY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH SALT & SOAK</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CONSCIOUS BEAUTY</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CANDLES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FACIAL ROLLERS & MASSAGE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HIGH-TECH TOOLS</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>INTIMATE CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PRE & POSTNATAL CARE</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SKIN CARE ROUTINES</Button>
                                            </Box>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SLEEP & STRESS</Button>
                                            </Box>
                                            <AccordionItem border='none'>
                                                <AccordionButton>
                                                    <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                        VITAMINS & SUPPLEMENTS
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                                <AccordionPanel pb={4}>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Supplements</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Hair & Nail Supplements</Button>
                                                    </Box>
                                                    <Box>
                                                        <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Skin Care Supplements</Button>
                                                    </Box>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <Box>
                                                <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUSTAINABLE BEAUTY</Button>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>FREE GIFTS</Button>
                                    <AccordionItem border='none'>
                                        <AccordionButton>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                                LEARN & EXPLORE
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4} pl='30px' display='grid' gap='15px'>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                #SHOWUSYOURBAG
                                            </Box>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                WEDDING ESSENTIALS
                                            </Box>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                MASTERCLASS
                                            </Box>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                EXCLUSIVE BRANDS & PRODUCTS
                                            </Box>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                BUYING GUIDES
                                            </Box>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                THE FOUNDER SERIES
                                            </Box>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                THE FRAGRANCE FINDER
                                            </Box>
                                            <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                MORE
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <Box>
                                        <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>EVENTS</Button>
                                    </Box>
                                    <Box>
                                        <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>BLUE REWARDS</Button>
                                    </Box>
                                    <Box>
                                        <Button leftIcon={<Icon as={VscLocation} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>STORE & SPA LOCATOR</Button>
                                    </Box>
                                </Accordion>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <Spacer />
                    <Box width='150px'>
                        <Link to='/'>
                            <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt='' />
                        </Link>
                    </Box>
                    <Spacer />
                    <Flex >
                        <Tooltip label='Wishlist'>
                            <Button leftIcon={<Icon as={AiOutlineHeart} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                        </Tooltip>
                        <Tooltip label='Search'>
                            <Button leftIcon={<SearchIcon boxSize='20px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                        </Tooltip>
                        {!isAuth.loggedin && <Tooltip label='Account'>
                            <Link to='/account/login'>
                                <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'></Button>
                            </Link>
                        </Tooltip>}
                        {isAuth.loggedin && <Tooltip label='Account'>
                            <Link to='#'>
                                <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'></Button>
                            </Link>
                        </Tooltip>}
                        <Tooltip label='Bag'>
                            <Button leftIcon={<Icon as={BiShoppingBag} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                        </Tooltip>
                    </Flex>
                </Flex>
            </Hide>
</Show> */}
        {/*<Hide above='768px'>
            <Flex bg='white' alignItems='center' padding='5px 0px' position='sticky' top='0px' zIndex={2}>
                <Button variant='ghost' _hover="white" onClick={onSmallNavOpen}><HamburgerIcon boxSize='25px' /></Button>
                <Drawer
                    isOpen={isSmallNavOpen}
                    placement='left'
                    onClose={onSmallNavClose}
                    size='md'
                >
                    <DrawerOverlay />
                    <DrawerContent >
                        <DrawerCloseButton />
                        <DrawerHeader>
                            {!isAuth.loggedin && <Tooltip label='Account'>
                                <Link to='/account/login'>
                                    <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>SIGN IN/UP</Button>
                                </Link>
                            </Tooltip>}
                            {isAuth.loggedin && <Tooltip label='Account'>
                                <Link to='#'>
                                    <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>ACCOUNT</Button>
                                </Link>
                            </Tooltip>}
                        </DrawerHeader>

                        <DrawerBody pb='30px'>
                            <Accordion allowMultiple allowToggle>
                                <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>ROUTINE REBOOT</Button>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            BRANDS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL BRANDS</Button>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    BEST SELLERS
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Augustinus Bader</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Chantecaille</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Dr. Barbara Sturm</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>dyptique</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Dyson</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>La Mer</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Lune + Aster</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>M-61</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>NARS</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Olaplexs</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Oribe</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>SkinCeuticals</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Tom Ford</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Trish McEvoy</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>VIRTUE</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    #NEWATBLUE
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>BalmLabs</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Boucleme</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>EltaMD</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Holy Curls</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>L'AVANT</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Lake & Skye</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>PCA Skin</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Sana Jardin</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Sisley-Paris</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Solawave</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Sunday || Sunday</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>The Maker</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>vVARDIS</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>ZitSticka</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    CONSCIOUS BEAUTY
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Hum Nutrition</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Fur</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Indie Lee</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Kjaer Weis</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>lilah b.</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Odacite</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>OSEA</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Tata Harper</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>WelleCo</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </AccordionPanel>
                                </AccordionItem>
                                <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>NEW!</Button>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            BEST SELLERS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SHOP ALL</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SKIN CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH & BODY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FRAGRANCE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOOLS & ACCESSORIES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MEN'S</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUN CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MINI & TRAVEL</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFTS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            SKIN CARE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL SKIN CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CLEANSERS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>EXFOLIATORS & PEELS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>EYE CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LIP CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MASKS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MOISTURIZERS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUN CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOOLS & DEVICES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TREATMENT & SERUMS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            MAKEUP
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL MAKEUP</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BRUSHES & TOOLS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>EYES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FACE & CHEEK</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LIPS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP BAGS & ACCESSORIES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP REMOVERS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>NAILS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PALETTES & SETS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            HAIR
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL HAIR</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BRUSHES & ACCESSORIES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>COLOR CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR LOSS & THINNING</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR TOOLS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR TREATMENTS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SHAMPOO & CONDITIONERS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>STYLING PRODUCTS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            BATH & BODY
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL BATH & BODY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ACTIVE LIFESTYLE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH & SHOWER</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BODY MOISTURIZERS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAND & FOOT CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>INTIMATE CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PERSONAL CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PRE & POSTNATAL CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUN CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TANNING & BRONZING</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOOLS & ACCESSORIES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            FRAGRANCE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL FRAGRANCE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>AROMATHERAPY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BODY SPRAY & HAIR MIST</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CANDLES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>COLOGNE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PERFUME</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>DIFFUSERS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ROLLERBALLS & TRAVEL SIZE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ROOM & PILLOW SPRAYS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            TOOLS & ACCESSORIES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL TOOLS & ACCESSORIES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH & BODY TOOLS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR BRUSHES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAIR HOT TOOLS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HIGH TECH TOOLS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP BRUSHES & TOOLS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>MAKEUP ACCESSORIES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SKIN CARE TOOLS & DEVICES</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            HOME & LIFESTYLE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL HOME & LIFESTYLE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ACTIVE LIFESTYLE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>AROMATHERAPY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CLEANING & HOME CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HAND SOAP AND SANITIZERS</Button>
                                        </Box>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    HOME FRAGRANCE
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Home Fragrance</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Candles</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Diffusers</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Room & Pillow Sprays</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SLEEP & STRESS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>TOWELS & BATH ACCESSORIES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>VITAMINS & SUPPLEMENTS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>WELLNESS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            SUN CARE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL SUN CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BODY SUNSCREEN</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FACE SUNSCREEN</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LIP SUNSCREEN</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SELF TANNING & BRONZING</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            MEN
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL MEN</Button>
                                        </Box>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    BATH & BODY
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Bath & Body</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Wash</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Lotion</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Deodorant</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Hand Cream</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Shaving</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    FRAGRANCE & COLOGNE
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Fragrance</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Aftershave</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Spray</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Cologne</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    HAIR & GROOMING
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Hair & Grooming</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Beard Oils</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Shampoos & Conditioners</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Styling Products</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Thinning Hair & Hair Loss</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    SHAVING
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Shaving</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Aftershave</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Beard Oils</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Shaving Cream</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    SKIN CARE
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>All Men's Skin Care</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Eye Cream</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Moisturizer</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Treatment & Serums</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Fashwash</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Lip Balms</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Scrubs & Exfoliators</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            GIFTS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ALL GIFTS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFTS BY CATEGORY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFTS BY PRICE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFT CARDS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>GIFT SETS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>LUXURY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>WEDDING PARTY GIFTS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>WELLNESS GIFTS</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            WELLNESS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SHOP ALL</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>ACTIVE LIFESTYLE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>AROMATHERAPY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>BATH SALT & SOAK</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CONSCIOUS BEAUTY</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>CANDLES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>FACIAL ROLLERS & MASSAGE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>HIGH-TECH TOOLS</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>INTIMATE CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>PRE & POSTNATAL CARE</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SKIN CARE ROUTINES</Button>
                                        </Box>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SLEEP & STRESS</Button>
                                        </Box>
                                        <AccordionItem border='none'>
                                            <AccordionButton>
                                                <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                                    VITAMINS & SUPPLEMENTS
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Body Supplements</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Hair & Nail Supplements</Button>
                                                </Box>
                                                <Box>
                                                    <Button letterSpacing='1px' color='#12284c' fontSize="13px" fontWeight='499' variant='ghost' _hover='white'>Skin Care Supplements</Button>
                                                </Box>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <Box>
                                            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>SUSTAINABLE BEAUTY</Button>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>FREE GIFTS</Button>
                                <AccordionItem border='none'>
                                    <AccordionButton>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="16px" fontWeight='500' flex='1' textAlign='left'>
                                            LEARN & EXPLORE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} pl='30px' display='grid' gap='15px'>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            #SHOWUSYOURBAG
                                        </Box>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            WEDDING ESSENTIALS
                                        </Box>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            MASTERCLASS
                                        </Box>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            EXCLUSIVE BRANDS & PRODUCTS
                                        </Box>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            BUYING GUIDES
                                        </Box>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            THE FOUNDER SERIES
                                        </Box>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            THE FRAGRANCE FINDER
                                        </Box>
                                        <Box letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' flex='1' textAlign='left'>
                                            MORE
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                                <Box>
                                    <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>EVENTS</Button>
                                </Box>
                                <Box>
                                    <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>BLUE REWARDS</Button>
                                </Box>
                                <Box>
                                    <Button leftIcon={<Icon as={VscLocation} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>STORE & SPA LOCATOR</Button>
                                </Box>
                            </Accordion>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Spacer />
                <Box width='150px'>
                    <Link to='/'>
                        <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt='' />
                    </Link>
                </Box>
                <Spacer />
                <Flex >
                    <Tooltip label='Wishlist'>
                        <Button leftIcon={<Icon as={AiOutlineHeart} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                    </Tooltip>
                    <Tooltip label='Bag'>
                        <Button leftIcon={<Icon as={BiShoppingBag} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                    </Tooltip>
                </Flex>
            </Flex>
            <Flex p='10px 10px 20px 10px'>
                <Input _placeholder={{ fontFamily: "sans-serif", letterSpacing: "1px", fontWeight: "450", color: "#12284c", opacity: "0.8" }} fontSize='16px' variant='unstyled' placeholder='SEARCH...' />
                <SearchIcon boxSize='22px' cursor='pointer' />
            </Flex>
</Hide>*/}
    </>
}