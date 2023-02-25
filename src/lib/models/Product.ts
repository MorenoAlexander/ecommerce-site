export const mockProduct: Product[] = [
  {
    id: "1",
    name: "Product 1",
    sku: "SKU-1",
    price: 100,
    description: "Product 1 description",
  },
  {
    id: "2",
    name: "Product 2",
    sku: "SKU-2",
    price: 200,
    description: "Product 2 description",
  },
  {
    id: "3",
    name: "Product 3",
    sku: "SKU-3",
    price: 300,
    description: "Product 3 description",
  },
  {
    id: "4",
    name: "Product 4",
    sku: "SKU-4",
    price: 400,
    description: "Product 4 description",
  },
  {
    id: "5",
    name: "Product 5",
    sku: "SKU-5",
    price: 500,
    description: "Product 5 description",
  },
  {
    id: "6",
    name: "Product 6",
    sku: "SKU-6",
    price: 600,
    description: "Product 6 description",
  },
]

export type Product = {
  id: string
  name: string
  sku: string
  price: number
  description: string
  image?: string
}
