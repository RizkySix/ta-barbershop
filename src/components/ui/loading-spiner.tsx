"use client"
import { Spinner, Box } from "@chakra-ui/react";

export default function SpinnerLoader() {
    return (
        <>
            <Box 
                position="fixed" 
                top="0" 
                left="0" 
                right="0" 
                bottom="0" 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                bg="blackAlpha.700" 
                zIndex="50"
            >
                <Spinner size="xl" color="white" />
            </Box>
        </>
    )
}
