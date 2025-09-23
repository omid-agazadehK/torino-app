"use client";
import { useCheckout } from "@/core/services/mutation";
import CheckoutForm from "../organisms/CheckoutForm";
import OrderDetails from "../organisms/OrderDetails";

export default function Checkout() {
  const { mutate,isPending:isCheckout } = useCheckout();

  return (
    <main className="container grid flex-1 grid-cols-24 gap-x-4 pt-16 md:pt-20">
      <CheckoutForm mutate={mutate}/>
      <OrderDetails isCheckout={isCheckout} />
    </main>
  );
}
