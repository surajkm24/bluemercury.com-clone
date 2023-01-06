import { SearchIcon } from '@chakra-ui/icons';
import { Input, Flex, Box, Text, Button, Icon, Tooltip, Image } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiShoppingBag } from 'react-icons/bi';
import { VscLocation } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { NavDrawer } from './NavDrawer';

export const Navbar = () => {
    const { isAuth } = useAuth();

    return <>
        <Flex bg='white' align='center' justify='space-between' py={{ base: "5px", lg: "0px" }}
            position={{ base: "sticky", lg: "static" }} top='0px' zIndex={2} w='100%' overflow='hidden'>
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
        <Flex p='10px 20px 10px' display={{ base: "flex", md: "none" }}>
            <Input _placeholder={{ fontFamily: "sans-serif", letterSpacing: "1px", fontWeight: "450", color: "#12284c", opacity: "0.8" }} fontSize='16px' variant='unstyled' placeholder='SEARCH...' />
            <SearchIcon boxSize='22px' cursor='pointer' />
        </Flex>
    </>
}