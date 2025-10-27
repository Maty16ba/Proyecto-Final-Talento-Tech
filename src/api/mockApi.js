const products = [
  {
    id: '1',
    name: 'PC Clásica "El Pionero"',
    price: 850,
    category: 'computadoras',
    img: '/src/assets/retro-pc.jpg',
    stock: 10,
    description: 'La computadora que lo empezó todo. Monitor CRT y 64MB de RAM.',
  },
  {
    id: '2',
    name: 'Consola "8-Bits de Furia"',
    price: 300,
    category: 'consolas',
    img: '/src/assets/retro-console.jpg',
    stock: 25,
    description: 'Revive los clásicos con esta icónica consola de 8 bits.',
  },
  {
    id: '3',
    name: 'Laptop "El Ejecutivo"',
    price: 1200,
    category: 'computadoras',
    img: '/src/assets/retro-laptop.jpg',
    stock: 5,
    description: 'Potencia portátil de los 90. Perfecta para hojas de cálculo.',
  },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = categoryId
        ? products.filter((prod) => prod.category === categoryId)
        : products;
      resolve(filteredProducts);
    }, 1000); // Simula 1 segundo de carga
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
};