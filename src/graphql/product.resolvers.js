const getProduct = (_, { id }) => {
  return {
    id,
    name: 'product 1',
    price: 100.12,
    description: 'bla bla bla',
    image: 'http://image.asas',
    createdAt: new Date().toISOString()
  }
}

const getProducts = () => {
  return [];
}

module.exports = { getProduct, getProducts };
