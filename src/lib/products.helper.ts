import apiClient from 'src/client/apiClient';

export const getProducts = async () => {
  const resProd = await apiClient.get('/products');

  if (resProd && resProd.data) {
    return resProd.data.products;
  }
};
