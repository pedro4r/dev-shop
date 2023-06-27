import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px auto',
    height: '656px',

    h1: {
        fontSize: '$xxl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: '1.4',
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const ProductsImages = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '60px',
})

export const ImageContainer = styled('div', {
    width: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '50%',
    marginTop: '4rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-60px',

    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.8)',

    lastChild: {
        marginLeft: '0px'
    },

    img: {
        objectFit: 'cover',
    }
})