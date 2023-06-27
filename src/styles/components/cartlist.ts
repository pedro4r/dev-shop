import { keyframes, styled } from "@stitches/react";

const slideInAnimation = keyframes({
    '0%': {
        transform: 'translateX(100%)',
    },
    '100%': {
        transform: 'translateX(0)',
    },
});

export const CartListContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    position: 'fixed',
    minHeight: '100vh',
    width: '30rem',
    top: '0px',
    right: '0px',
    backgroundColor: '$gray800',
    zIndex: 1,
    padding: '1.5rem 1.5rem 3rem 3rem',

    boxShadow: '-8px 0px 60px rgba(0, 0, 0, 0.8)',

    transition: 'transform 1s ease-out',
    animation: `${slideInAnimation} 0.5s ease-out`,
    willChange: 'transform',

    header: {
        width: '100%',
        display: 'flex',
        button: {
            marginLeft: 'auto',
            border: 'none',
            backgroundColor: 'transparent',
            color: '$gray300'
        }
    },

    h2: {
        color: '$gray300'
    },

    footer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',

        marginTop: 'auto',

        button: {
            marginTop: '3.4rem',
            fontSize: '$md',

            border: 'none',
            borderRadius: '8px',
            height: '4.3rem',

            color: '$white',
            fontWeight: 'bold',
            backgroundColor: '$green500',

            '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed',
            },

            '&:not(:disabled):hover': {
                backgroundColor: '$green300',
            }
        }
    }
})

export const ItemsList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    marginTop: '2rem',
})

export const Item = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.25rem',
    alignItems: 'stretch',
})

export const ImageContainer = styled('div', {
    height: '5.8rem',
    width: '6.3rem',

    borderRadius: '8px',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
})

export const ItemDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,

    span: {
        color: '$gray300',
    },

    strong: {
        fontSize: '$lg',
        marginTop: '0.5rem',
    },

    button: {
        all: 'unset',
        marginTop: 'auto',
        backgroundColor: 'transparent',
        color: '$green300',
        fontSize: '$md',
        fontWeight: 'bold',
    }
})

export const FooterInfo = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    span: {
        fontSize: '$md',
        color: '$gray300',
    },

    strong: {
        fontSize: '$xxl',
        color: '$gray300',
    }
})