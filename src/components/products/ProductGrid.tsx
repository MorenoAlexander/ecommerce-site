import { createSignal, For } from "solid-js"
import { Product } from "~/lib/models/Product"
import ProductCard from "./ProductCard"

type ProductGridProps = {
  products?: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div class="flex flex-wrap mx-auto align-middle justify-items-center justify-center">
      <For each={products} fallback={<div>Loading...</div>}>
        {(product) => <ProductCard product={product} data-index={product.id} />}
      </For>
    </div>
  )
}
