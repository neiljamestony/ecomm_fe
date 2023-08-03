export const getProducts = () => {
  const data = fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return data;
};

export const getCategoryProducts = ({ queryKey }) => {
  const [_, category] = queryKey;
  const data = fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return data;
};
