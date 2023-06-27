import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    marginLeft: 'auto',
    minHeight: '43px',
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0,0,0,0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

    },

    button: {
        height: '3.5rem',
        width: '3.5rem',

        borderRadius: 6,

        border: 'none',
        background: '$green300',

        color: '$white',

        '&:hover': {
            background: '$green500',
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    },

})

export const ShirtDetails = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    strong: {
        fontSize: '$md',
        color: '$white',
    },

    span: {
        fontSize: '$lg',
        fontWeight: 'bold',
        color: '$green300',
    }
})

