import { createSignal } from "solid-js"
import ProductGrid from "~/components/products/ProductGrid"
import { mockProduct, Product } from "~/lib/models"
export default function Home() {
  const [products, setProducts] = createSignal<Product[]>(mockProduct)
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Welcome!
      </h1>
      <ProductGrid products={products()} />
    </main>
  )
}
