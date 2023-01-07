import { Box } from "@chakra-ui/react"
import { Features } from "../Components/Features/Features"
import { Footer } from "../Components/Footer/Footer"
import { Navbar } from "../Components/Navbar/Navbar"
import { OffersText } from "../Components/OffersText"
import { Signup } from "../Components/Signup"

const SignupPage = () => {

    return (
        <Box>
            <Navbar />
            <Features />
            <OffersText />
            <Signup />
            <Footer />
        </Box>
    )
}

export default SignupPage