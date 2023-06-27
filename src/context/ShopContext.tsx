import { ReactNode, createContext, useState } from "react";

interface ShopContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeItem: (id: string) => void;
    toggleCartWindow: () => void;
    cartCount: number;
    isCartOpen: boolean;
    orderAmount: number;
    itemsQuantity: number;
}

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
}

interface ShopContextProviderProps {
    children: ReactNode;
}

export const ShopContext = createContext({} as ShopContextType);

export function ShopContextProvider({ children }: ShopContextProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCartWindow = () => {
        setIsCartOpen(!isCartOpen);
    };

    const cartCount = cart.length;

    function addToCart(product: Product) {

        const isProductAlreadyAdded = cart.findIndex(item => item.id === product.id)

        if (isProductAlreadyAdded === -1) {
            setCart((state) => [...state, product])
        }

        else {
            return
        }

    }

    function removeItem(id: string) {
        const cartAfterRemoveItem = cart.filter(item => item.id !== id)
        setCart(cartAfterRemoveItem)
    }

    const orderAmount = (cart ?? []).reduce((acc, item) => {
        const stringToNumber = parseFloat(item.price.replace('$', ''));
        return acc += stringToNumber;
    }, 0)

    const itemsQuantity = cart.length;

    return (
        <ShopContext.Provider
            value={{
                cart,
                addToCart,
                removeItem,
                cartCount,
                isCartOpen,
                toggleCartWindow,
                orderAmount,
                itemsQuantity,
            }}>
            {children}
        </ShopContext.Provider>
    );
}
