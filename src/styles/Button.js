import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        textTransform: 'uppercase',
        border: '1px solid black',
        borderRadius: 'none',
        p: '2.3rem 3.2rem',
        fontSize: '1.2rem',
        letterSpacing: '0.2rem',
        w: '16.2rem'
    },
    variants: {
        primary: {
            bgColor: '#203A4C',
            color: 'white',
            cursor: 'pointer',
            _hover: {
                bgColor: '#5FB4A2'
            }
        }
    }
});

export default Button