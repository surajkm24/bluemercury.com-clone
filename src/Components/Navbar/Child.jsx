import { Button, Box } from '@chakra-ui/react';

export const Child = ({ title }) => {
    return (
        <Box>
            <Button letterSpacing='1px' color='#12284c' fontSize="14px" fontWeight='499' variant='ghost' _hover='white'>{title}</Button>
        </Box>
    )
}