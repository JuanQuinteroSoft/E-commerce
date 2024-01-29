import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";

const style = {
  width: "360px",
  height: "100vh ",
};
export default function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen && context.selectedProductId
          ? "flex"
          : "hidden"
      } flex-col top-68 fixed right-0 border border-black rounded-lg bg-white`}
      style={style}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <figure className=" px-6">
        <img
          src={context.productToShow.images}
          alt={context.productToShow.title}
          className="w-full h-full rounded-lg"
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-3">${context.productToShow.price}</span>
        <span className="font-medium text-xl mb-2">{context.productToShow.title}</span>
        <span className="font-light text-md">{context.productToShow.description}</span>
      </p>
    </aside>
  );
}
