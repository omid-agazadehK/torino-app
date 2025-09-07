export const cityHandler = (data, type) => {
  if (!data || !type) return;

  const result = data
    ?.map((tour) => {
      return tour[type];
    })
    .filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });
  return result;
};
export const priceFormat = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
