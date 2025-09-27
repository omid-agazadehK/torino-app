import { useQuery } from "@tanstack/react-query";
import api from "../config/axios";

const useGetUserData = () => {
  const url = "/user/profile";
  const queryKey = ["user"];
  const queryFn = () => api.get(url);

  return useQuery({ queryKey, queryFn });
};
const useGetUserTours = () => {
  const url = "/user/tours";
  const queryKey = ["bookedTours"];
  const queryFn = () => api.get(url);

  return useQuery({ queryKey, queryFn });
};
const useGetBasket = () => {
  const url = "/basket";
  const queryKey = ["basket"];
  const queryFn = () => api.get(url);

  return useQuery({ queryKey, queryFn });
};
const useGetTransaction = () => {
  const url = "/user/transactions";
  const queryKey = ["transactions"];
  const queryFn = () => api.get(url);

  return useQuery({ queryKey, queryFn });
};

export { useGetUserData, useGetUserTours, useGetBasket, useGetTransaction };
