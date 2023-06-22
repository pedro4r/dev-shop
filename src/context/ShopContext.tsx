import { ReactNode, createContext, useState } from "react";

interface ShopContextType {
    cart: Product[];
    addToCart: (productId: string) => void;
    toggleCartWindow: () => void;
    cartCount: number;
    isCartOpen: boolean;
}

interface Product {
    productId: string;
    productName: string;
    productPrice: string;
    productImgUrl: string;
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

    const cartCount = 53;

    function addToCart(productId: string) {

    }

    return (
        <ShopContext.Provider
            value={{
                cart,
                addToCart,
                cartCount,
                isCartOpen,
                toggleCartWindow
            }}>
            {children}
        </ShopContext.Provider>
    );
}
