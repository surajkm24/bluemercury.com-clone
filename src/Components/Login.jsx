import { Box, Heading, Input, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from "../Context/AuthContext";
import { loginUser } from "../Services/auth.services";


export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const toast = useToast();
    const { isAuth, setIsAuth } = useAuth();

    const handleChange = (event) => {
        let { value, name } = event.target;
        value = value.trim();
        setFormData({ ...formData, [name]: value })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(formData, toast, setIsAuth);
    }
    useEffect(() => {
        (document.querySelector('title').innerText = 'Account - bluemercury')
    }, [])

    if (isAuth.loggedin) {
        return <Navigate to='/' />
    }
    return <>
        <Box w={['280px', '460px']} m='auto' mt='65px' mb='140px' zIndex={1}>
            <Heading color='#12284c' letterSpacing='2px' fontSize='37px' fontWeight='400'
                textAlign='center'>
                LOGIN
            </Heading>
            <Text textAlign='center' color='#12284c' mt='20px' fontSize='19px' fontWeight='300'>
                Please enter your e-mail and password.
            </Text>
            <form onSubmit={handleLogin}>
                <Box border='1px solid black' mt='20px' p='7px 14px' _hover={{ borderColor: "blue" }}>
                    <Input variant='unstyled' placeholder='Email' borderRadius='0px' value={formData.email} onChange={handleChange} required name='email' />
                </Box>
                <Box mt='15px' p=' 7px 14px' display='flex' border='1px solid black'
                    _hover={{ borderColor: "blue" }}>
                    <Input placeholder='Password' variant='unstyled' type='password' borderRadius='0px'
                        value={formData.password} required name='password' onChange={handleChange} />
                    <Text cursor='pointer' textDecoration='underline' fontSize='14px'
                        whiteSpace='nowrap' color='gray'>Forgot Password?</Text>
                </Box>
                <Input type='submit' value='LOGIN' bg='#12284c' color='white' borderRadius='0px'
                    mt='15px' border='1px solid #12284c' fontWeight='500' cursor='pointer' />
            </form>
            <Box display='flex' justifyContent='center' mt='20px'>
                <Text fontSize='14px' color='#12284c' fontWeight='400'>
                    Don't have an account? &nbsp;
                </Text>
                <Link to='/account/signup'>
                    <Text cursor='pointer' textDecoration='underline' fontSize='14px' color='#12284c'
                        fontWeight='500'>
                        Create one
                    </Text>
                </Link>
            </Box>
        </Box>
    </>
}