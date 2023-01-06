import { Button, Box } from '@chakra-ui/react';

export const SimpleListItem = ({ title }) => {
    return (
        <Box>
            <Button letterSpacing='1px' color='#12284c' fontSize="16px" variant='ghost' _hover='white'>{title}
            </Button>
        </Box>
    )
}