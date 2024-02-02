import { React, createContext, useState, useEffect } from "react";

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

  // Get Products

  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get Products by tittle

  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get Products by category

  const [searchByCategory, setSearchByCategory] = useState(null);
  

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(
      item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    console.log(items);
    return items?.filter(item => item.category?.name.toLowerCase().includes(searchByCategory.toLowerCase()));
  };

  const filterBy = (searchType,items,searchByTitle,searchByCategory) => {
    if (searchType === 'BY_TITLE') {
     return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
     }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
     }
    if (!searchType) {
      return items
     }
  };

  useEffect(() => {
    if (searchByCategory && searchByTitle ) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle, searchByCategory));
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items,searchByTitle, searchByCategory));
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items ,searchByTitle, searchByCategory));
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory));
  }, [items, searchByTitle,searchByCategory]);


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
        setOrder,
        setItems,
        items,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
