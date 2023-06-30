import { styled } from ".."


export const HeaderContainer = styled('header', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: '1180px',
    margin: '0px auto',

    button: {
        height: '3rem',
        width: '3rem',

        borderRadius: 6,

        border: 'none',
        background: '$gray800',

        color: '$gray300',
    },
})

export const CartButton = styled('button', {
    position: 'relative',
})

export const CartCounter = styled('div', {
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: '1.5rem',
    height: '1.5rem',

    color: '$white',
    background: '$green500',
    borderRadius: '50%',

    boxShadow: '0 0 0 3px #121214',

    span: {
        fontSize: '$md',
        fontWeight: 'bold',
    }
})