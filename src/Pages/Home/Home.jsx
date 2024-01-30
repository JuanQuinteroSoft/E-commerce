import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Cards/Card";
import { React, useContext } from "react";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context/Context";

export default function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      return context.filteredItems.length > 0
      ? context.filteredItems.map(item => <Card key={item.id} data={item} />)
      : <div>We don't have anything :((</div>;
    } else {
      return(
        context.items?.map(item => (
        <Card key={item.id} data={item} />
        ))
      )
    }
  };

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-lg">Exclusive Products </h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-dotted"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}
