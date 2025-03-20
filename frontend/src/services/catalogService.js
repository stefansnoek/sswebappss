export const catalogService = {
  getProducts: () => Promise.resolve({ data: [{ id: 1, name: "Product A", description: "Description A" }] }),
  getProductById: (id) => Promise.resolve({ data: { id, name: "Product A", description: "Description A" } })
};
