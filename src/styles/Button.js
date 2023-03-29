import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        textTransform: 'uppercase',
        border: '1px solid black',
        borderRadius: 'none',
        py: '2.3rem',
        letterSpacing: '0.2rem',
        cursor: 'pointer',
        fontWeight: '400',
    },
    variants: {
        primary: {
            fontSize: '1.2rem',
            bgColor: '#203A4C',
            color: '#FAFAFA',
            px: '3.4rem',
            _hover: {
                bgColor: '#5FB4A2'
            }
        },
        secondary: {
            fontSize: '1.2rem',
            bgColor: '#FAFAFA',
            px: '3.4rem',
            _hover: {
                bgColor: '#33323D',
                color: '#FAFAFA',
            }
        },
    },
});

export default Button