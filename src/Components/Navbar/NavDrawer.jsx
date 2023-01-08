import { useDisclosure, Box, Button, Icon, Tooltip, useToast } from "@chakra-ui/react";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg';
import { VscLocation } from 'react-icons/vsc';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";
import { AccordionList } from "./AccordionList";
import { logout } from "../../Services/auth.services";

export const NavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuth, setIsAuth } = useAuth();
    const toast = useToast();

    return (
        <Box display={{ base: "flex", lg: "none" }}>
            <Button variant='ghost' _hover="white" onClick={onOpen}>
                <HamburgerIcon boxSize='25px' />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
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
                        {isAuth.loggedin && <Tooltip label='Logout'>
                            <Link to='#'>
                                <Button leftIcon={<Icon as={CgProfile} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white' onClick={() => logout(setIsAuth, toast)}
                                >LOGOUT</Button>
                            </Link>
                        </Tooltip>}
                    </DrawerHeader>
                    <DrawerBody pb='30px'>
                        <AccordionList />
                        <Box>
                            <Button leftIcon={<Icon as={VscLocation} boxSize='25px' />} letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>STORE & SPA LOCATOR</Button>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}