import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  /**
   * Primary image used on listing pages. Should also appear as first entry in `images` when multiple are available.
   */
  image: string;
  /**
   * Optional gallery for product details. If provided, ProductDetails will allow
   * the user to switch between these pictures.
   */
  images?: string[];
  category: 'jewelry' | 'clothing' | 'bags' | 'shoes';
  description: string;
  rating: number;
  sizes?: string[]; // For clothing
  shippingDate?: string; // ISO Date string
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  total: number;
  subtotal: number;
  discount: { code: string; amount: number; type: 'fixed' | 'percentage' } | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [discount, setDiscount] = useState<{ code: string; amount: number; type: 'fixed' | 'percentage' } | null>(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const applyCoupon = (code: string) => {
    const coupons = {
      'WELCOME10': { amount: 10, type: 'percentage' as const },
      'VIBE20': { amount: 20, type: 'fixed' as const },
      'HIPHOP50': { amount: 50, type: 'fixed' as const },
    };

    if (code in coupons) {
      setDiscount({ code, ...coupons[code as keyof typeof coupons] });
      return true;
    }
    return false;
  };

  const removeCoupon = () => setDiscount(null);

  const addToCart = (product: Product, size?: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1, selectedSize: size }];
    });
  };

  const removeFromCart = (productId: string, size?: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.selectedSize === size))
    );
  };

  const updateQuantity = (productId: string, quantity: number, size?: string) => {
    if (quantity < 1) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(null);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const total = React.useMemo(() => {
    if (!discount) return subtotal;
    if (discount.type === 'percentage') {
      return Math.round(subtotal * (1 - discount.amount / 100));
    }
    return Math.max(0, subtotal - discount.amount);
  }, [subtotal, discount]);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, subtotal, discount, applyCoupon, removeCoupon, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
