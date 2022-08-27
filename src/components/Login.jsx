import { Box, Button, Heading, Input, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Slide } from '@chakra-ui/react'
import { AuthContext } from "../Context/AuthContext";


export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    const [success,setSuccess] = useState(false)
    const {isAuth,setIsAuth} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        let usersData = await fetch('https://fierce-springs-42166.herokuapp.com/bluemercury.com-users');
        usersData = await usersData.json();

        let uniqData = usersData.filter(item => item.email === formData.email && item.password === formData.password);
        if (uniqData.length === 0) {
            setAlert(true);
            setTimeout(()=>{ 
                setAlert(false)
            },4000)
            return;
        }
        localStorage.setItem('bluemercury-user',uniqData[0].id)
        setIsAuth({...isAuth,data:uniqData[0],loggedin:true});
        setSuccess(true);
        setTimeout(()=>{
            setSuccess(false);
            navigate('/')
        },4000)
    }
    useEffect(() => {
        (document.querySelector('title').innerText = 'Account - bluemercury')
    }, [])
    return <>
        <Slide in={alert} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}  bg='white'>
            <Alert status='error' w='80vw' mx='10vw' mt='50px' flexWrap='wrap'  >
                <AlertIcon />
                <AlertTitle>User with given credentials doesn't exist!</AlertTitle>
                <AlertDescription>Try signing up.</AlertDescription>
            </Alert>
        </Slide>
        <Slide in={success} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='success'  w='80vw' mx='10vw' mt='50px' flexWrap='wrap'>
                <AlertIcon />
                <AlertTitle>Logged In Succesfully!</AlertTitle>
                <AlertDescription>Redirecting to Home page</AlertDescription>
            </Alert>
        </Slide>
        <Box w={['280px', '460px']} m='auto' mt='65px' mb='140px' zIndex={1}>
            <Heading color='#12284c' letterSpacing='2px' fontSize='37px' fontWeight='400' textAlign='center'>LOGIN</Heading>
            <Text textAlign='center' color='#12284c' mt='20px' fontSize='19px' fontWeight='300'>Please enter your e-mail and password.</Text>
            <form onSubmit={handleLogin}>
                <Box border='1px solid black' mt='20px' p='7px 14px' _hover={{ borderColor: "blue" }}>
                    <Input variant='unstyled' placeholder='Email' borderRadius='0px' onChange={(e) => setFormData({ ...formData, email: e.target.value })} required/>
                </Box>
                <Box mt='15px' p=' 7px 14px' display='flex' border='1px solid black' _hover={{ borderColor: "blue" }}>
                    <Input placeholder='Password' variant='unstyled' type='password' borderRadius='0px' required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <Text cursor='pointer' textDecoration='underline' fontSize='14px' whiteSpace='nowrap' color='gray'>Forgot Password?</Text>
                </Box>
                <Input type='submit' value='LOGIN' bg='#12284c' color='white' borderRadius='0px' mt='15px' border='1px solid #12284c' fontWeight='500' cursor='pointer' />
            </form>
            <Box display='flex' justifyContent='center' mt='20px'>
                <Text fontSize='14px' color='#12284c' fontWeight='400'>Don't have an account? &nbsp;</Text>
                <Link to='/account/signup'>
                    <Text cursor='pointer' textDecoration='underline' fontSize='14px' color='#12284c' fontWeight='500'>Create one</Text>
                </Link>
            </Box>
        </Box>
    </>
}