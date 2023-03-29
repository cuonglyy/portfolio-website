import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        textTransform: 'uppercase',
        border: '1px solid black',
        borderRadius: 'none',
        p: '2.3rem 3.2rem',
        letterSpacing: '0.2rem',
        w: '16.2rem',
        cursor: 'pointer'
    },
    variants: {
        primary: {
            fontSize: '1.2rem',
            bgColor: '#203A4C',
            color: 'white',
            _hover: {
                bgColor: '#5FB4A2'
            }
        },
        secondary: {
            fontSize: '1.2rem',
            bgColor: 'white',
            _hover: {
                bgColor: '#33323D',
                color: 'white',
            }
        },
    },
});

export default Button