import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleTotal = (value) => {
    setTotalPrice((p) => p + +value);
  };

  const addItem = (item, count) => {
    if (cartItems.find((i) => i.item.id === item.id)) {
      const itemIndex = cartItems.findIndex((i) => i.item.id === item.id);
      const modifiedItems = [...cartItems];
      modifiedItems[itemIndex] = { item, count };
      setCartItems(modifiedItems);
    } else {
      setCartItems([...cartItems, { item, count }]);
    }
  };

  const removeItem = (id) => {
    const remainingItems = cartItems.filter((i) => i.item.id !== id);
    const removedItem = cartItems.find((i) => i.item.id === id);
    const removedItemTotalPrice = removedItem.count * removedItem.item.price;
    setCartItems(remainingItems);
    setTotalPrice((p) => p - removedItemTotalPrice);
  };

  return (
    <AppContext.Provider
      value={{ totalPrice, handleTotal, addItem, removeItem, cartItems }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
