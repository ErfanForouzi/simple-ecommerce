export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let uniq = data.map((item) => item[type]);
  if(type ==='colors'){
    uniq = uniq.flat()
  }

  return ['all',...new Set(uniq)]
};
