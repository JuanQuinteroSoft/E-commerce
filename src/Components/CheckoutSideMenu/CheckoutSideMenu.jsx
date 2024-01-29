import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";
import totalPrice from "../../utils/totalprice";

const style = {
  width: "360px",
  height: "100vh ",
};
export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen && context.selectedCheckoutSideMenuId
          ? "flex"
          : "hidden"
      }  flex-col top-68 fixed right-0 border border-black rounded-lg bg-white pb-20`}
      style={style}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 text-xl py-6">
        <p className="flex justify-between items-center">
          <span className="font-bold">Total:</span>
          <span>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
        <button
          onClick={() => handleCheckout()}
          className="text-center w-full bg-black text-white mt-5 h-12 rounded-lg"
        >
          Checkout
        </button>
        </Link>
       
      </div>
    </aside>
  );
}
