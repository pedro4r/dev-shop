import { ShopContext } from "@/context/ShopContext";
import { CartListContainer, FooterInfo, ImageContainer, Item, ItemDetails, ItemsList } from "@/styles/components/cartlist";
import { X } from "phosphor-react";
import { useContext } from "react";

export default function CartList() {

    const { isCartOpen, toggleCartWindow } = useContext(ShopContext);

    return (
        <>
            {isCartOpen &&
                <CartListContainer>
                    <header>
                        <button onClick={toggleCartWindow} >
                            <X size={32} weight="bold" />
                        </button>
                    </header>
                    <h2>Cart list</h2>
                    <ItemsList>
                        <Item>
                            <ImageContainer />
                            <ItemDetails>
                                <span>Nome da Camisa</span>
                                <strong>$29.99</strong>
                                <button>Remove</button>
                            </ItemDetails>
                        </Item>
                    </ItemsList>
                    <footer>
                        <FooterInfo>
                            <span>Quantity</span>
                            <span>4 itens</span>
                        </FooterInfo>
                        <FooterInfo>
                            <h2>Total</h2>
                            <strong>$40</strong>
                        </FooterInfo>
                        <button>Complete Purchase</button>
                    </footer>
                </CartListContainer>
            }
        </>
    )



}