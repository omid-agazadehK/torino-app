"use client";
import CheckoutForm from "@/components/organisms/checkout/CheckoutForm";
import OrderDetails from "@/components/organisms/checkout/OrderDetails";
import { useCheckout } from "@/core/services/mutation";

export default function Checkout() {
  const { mutate, isPending: isCheckout } = useCheckout();
  return (
    <main className="lg:container grid flex-1 grid-cols-20 gap-x-4 max-lg:px-7 pt-16 md:pt-20">
      <CheckoutForm mutate={mutate} />
      <OrderDetails isCheckout={isCheckout} />
    </main>
  );
}
