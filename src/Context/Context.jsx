import { React, createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export default function Context({ children }) {
  //  shopping Card- count
  const [count, setCount] = useState(0);

  // Product Detail - Oppen/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const openProductDetail = (productId) => {
    setSelectedProductId(productId);
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setSelectedProductId(null);
    setIsProductDetailOpen(false);
  };

  // Checkout side menu - Oppen/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [selectedCheckoutSideMenuId, setSelectedCheckoutSideMenuId] =
    useState(null);
  const openCheckoutSideMenu = (checkoutProductId) => {
    console.log("Abriendo");
    setSelectedCheckoutSideMenuId(checkoutProductId);
    setIsCheckoutSideMenuOpen(true);
  };

  const closeCheckoutSideMenu = () => {
    console.log("Cerrar");
    setSelectedCheckoutSideMenuId(null);
    setIsCheckoutSideMenuOpen(false);
  };

  // Show productDetail

  const [productToShow, setProductToShow] = useState({});

  // Shopping cart - add products to cart

  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart - Order

  const [order, setOrder] = useState([]);



  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        selectedProductId,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        setProductToShow,
        productToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        selectedCheckoutSideMenuId,
        setSelectedCheckoutSideMenuId,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
