export const handleSubscribe = (toast, email) => {
    if (!email || !email.includes('@') || !email.includes('.') || email.length < 6) {
        toast({
            title: "Please enter a valid email!",
            status: "error",
            isClosable: "true",
            duration: 1500,
            position: "top"
        })
        return false;
    }
    else {
        toast({
            title: "Subscribed successfully.",
            status: "success",
            isClosable: "true",
            duration: 1500,
            position: "top"
        })
        return true;
    }
}