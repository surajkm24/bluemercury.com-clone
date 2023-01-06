import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, Input, InputRightElement, Flex, useDisclosure, Show, Hide, Spacer, Box, Text, Button, Icon, Tooltip, Popover, PopoverArrow, PopoverTrigger, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, Image } from '@chakra-ui/react';
import { AiFillExclamationCircle, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiShoppingBag } from 'react-icons/bi';
import { VscLocation } from 'react-icons/vsc';
import { useState, useRef, useEffect, useContext } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { Shop } from './Shop';
import { New } from './New';
import { Events } from './Events';
import { BlueRewards } from './BlueRewards';
import { RoutineReboot } from './RoutineReboot';
import { Explore } from './Explore';
import { Brands } from './Brands';

export const Features = () => {
    const [count, setCount] = useState(1);
    const [showLogo, setShowLogo] = useState(false);
    const { isAuth } = useAuth();
    const myRef = useRef();
    window.onscroll = () => {
        myRef.current.offsetTop > 87 ? setShowLogo(true) : setShowLogo(false);
    }
    return (
        <Flex ref={myRef} justifyContent={showLogo ? 'space-between' : 'center'} mt='10px'
            position='sticky' top='0px' bg='white' alignItems='center' p='5px 0px 5px 15px' zIndex={2}
            display={{ base: "none", lg: "flex" }}>
            <Box width='150px' display={showLogo ? 'block' : 'none'}>
                <Link to='/'>
                    <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt='' />
                </Link>
            </Box>
            <Flex justifyContent='center'
                gap={showLogo ? [null, null, null, '1.2vw', '2.5vw'] : 9}
                alignItems='center' cursor='pointer' >
                <Shop count={count} setCount={setCount} showLogo={showLogo} />
                <New />
                <Brands />
                <Explore />
                <Events />
                <BlueRewards />
                <RoutineReboot />
            </Flex>
            <Flex display={showLogo ? 'block' : 'none'}>
                <Tooltip label='Wishlist'>
                    <Button leftIcon={<Icon as={AiOutlineHeart} boxSize='23px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                </Tooltip>
                <Tooltip label='Search'>
                    <Button leftIcon={<SearchIcon boxSize='19px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white' display={{ base: "none", xl: "inline" }}></Button>
                </Tooltip>
                {!isAuth.loggedin && <Tooltip label='Account'>
                    <Link to='/account/login'>
                        <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white' display={{ base: "none", xl: "inline" }}></Button>
                    </Link>
                </Tooltip>}
                {isAuth.loggedin && <Tooltip label='Account'>
                    <Link to='#'>
                        <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white' display={{ base: "none", xl: "inline" }}></Button>
                    </Link>
                </Tooltip>}
                <Tooltip label='Bag'>
                    <Button leftIcon={<Icon as={BiShoppingBag} boxSize='23px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
                </Tooltip>
            </Flex>
        </Flex>
    )
}