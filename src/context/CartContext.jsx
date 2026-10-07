import { useState } from "react";
import { CartContext } from "./cartStore";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(productId) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === productId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { productId, quantity: 1 }];
    });
  }

  function setItemQuantity(productId, quantity) {
    setItems((currentItems) =>
      quantity < 1
        ? currentItems.filter((item) => item.productId !== productId)
        : currentItems.map((item) =>
            item.productId === productId ? { ...item, quantity } : item,
          ),
    );
  }

  function removeItem(productId) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId),
    );
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, itemCount, addItem, setItemQuantity, removeItem, clearCart: () => setItems([]) }}
    >
      {children}
    </CartContext.Provider>
  );
}