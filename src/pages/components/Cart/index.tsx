import { ShopContext } from "@/context/ShopContext";
import { CartListContainer, FooterInfo, ImageContainer, Item, ItemDetails, ItemsList } from "@/styles/components/cartlist";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useContext, useState } from "react";

export default function CartList() {

    const { isCartOpen, toggleCartWindow, cart, orderAmount, itemsQuantity, removeItem } = useContext(ShopContext);

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct() {

        const cartItems = cart.map(item => {
            return {
                price: item.defaultPriceId,
                quantity: 1,
            }
        })

        setIsCreatingCheckoutSession(true);

        try {
            const response = await axios.post('/api/checkout', {
                priceIds: cartItems
            })

            const { checkoutUrl } = response.data;
            window.location.href = checkoutUrl;
        }
        catch (err) {
            setIsCreatingCheckoutSession(false);
            alert('Checkout transation failed')
        }
    }

    function handleRemoveItem(id: string) {
        removeItem(id);
    }

    return (
        isCartOpen === true && (
            <CartListContainer open={isCartOpen}>
                <header>
                    <button onClick={toggleCartWindow}>
                        <X size={32} weight="bold" />
                    </button>
                </header>
                <h2>Cart list</h2>

                {cart.map(item => (
                    <ItemsList key={item.id}>
                        <Item>
                            <ImageContainer>
                                <Image src={item.imageUrl} width={94} height={94} alt="" />
                            </ImageContainer>
                            <ItemDetails>
                                <span>{item.name}</span>
                                <strong>{item.price}</strong>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </ItemDetails>
                        </Item>
                    </ItemsList>
                ))}
                <footer>
                    <FooterInfo>
                        <span>Quantity</span>
                        <span>{itemsQuantity}</span>
                    </FooterInfo>
                    <FooterInfo>
                        <h2>Total</h2>
                        <strong>${orderAmount.toFixed(2)}</strong>
                    </FooterInfo>
                    <button disabled={cart.length === 0 || isCreatingCheckoutSession} onClick={handleBuyProduct}>
                        Complete Purchase
                    </button>
                </footer>
            </CartListContainer>
        )
    );


}