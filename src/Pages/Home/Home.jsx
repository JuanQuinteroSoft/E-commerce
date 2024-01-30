import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Cards/Card";
import {  React,  useContext } from "react";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context/Context";

export default function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {
        context.items?.map(item => (
          <Card key={item.id} data={item}/>
        ))
      }
      </div>
      <ProductDetail/>
      <CheckoutSideMenu/>
    </Layout>
  );
}
