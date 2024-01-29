import {
  ChevronRightIcon,
  CalendarDaysIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date;
  };
  return (
    <>
      <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4 shadow-lg ">
        <div className="flex justify-between w-full">
          <p className="flex flex-col">
            <p className="flex gap-2">
              <CalendarDaysIcon className="h-6 w-6 " />
              <span className="font-light">{currentDate()}</span>
            </p>
            <p className="flex gap-2">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="font-light">{totalProducts} articles </span>
            </p>
          </p>
          <p className="flex items-center">
            <span className="font-medium text-2xl ">${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer " />
          </p>
        </div>
      </div>
    </>
  );
};

export default OrdersCard;
