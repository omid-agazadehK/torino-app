"use client";
import CheckoutForm from "@/components/organisms/checkout/CheckoutForm";
import OrderDetails from "@/components/organisms/checkout/OrderDetails";
import { useCheckout } from "@/core/services/mutation";

export default function Checkout() {
  const { mutate, isPending: isCheckout } = useCheckout();

  return (
    <main className="container grid flex-1 grid-cols-24 gap-x-4 pt-16 md:pt-20">
      <CheckoutForm mutate={mutate} />
      <OrderDetails isCheckout={isCheckout} />
    </main>
  );
}
