export const cityHandler = (data, type) => {
  return data
    ?.map((tour) => {
      return tour[type];
    })
    .filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });
};
