"use client";
import OrderItem from "@/components/molecules/checkout/OrderItem";
import OrderSkeleton from "@/components/molecules/checkout/OrderSkeleton";
import { useGetBasket } from "@/core/services/query";

function OrderDetails({ isCheckout }) {
  const { data: { tourData } = {}, isPending } = useGetBasket();
  if (isPending) return <OrderSkeleton />;
  return <OrderItem tourData={tourData} isCheckout={isCheckout} />;
}

export default OrderDetails;
