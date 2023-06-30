import logoImg from '../../../assets/logo.svg'
import { CartButton, CartCounter, HeaderContainer } from '../../../styles/components/header'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { ShopContext } from '@/context/ShopContext'
import { useContext } from 'react'

export default function Header() {

    const { cartCount, toggleCartWindow } = useContext(ShopContext);

    return (
        <HeaderContainer>
            <Image src={logoImg} alt="" />
            <CartButton onClick={toggleCartWindow}>
                <CartCounter>
                    <span>{cartCount}</span>
                </CartCounter>
                <Handbag size={24} weight="bold" />
            </CartButton>
        </HeaderContainer>
    )

}