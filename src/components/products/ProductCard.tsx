import { Product } from "~/lib/models/Product"

type ProductCardProps = {
  product: Product
}

export default function ProductCard(props: ProductCardProps) {
  // Tailwind CSS Card Component

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={props.product.image} alt={props.product.name} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-left">{props.product.name}</div>
        <p class="text-gray-700 text-base text-left">${props.product.price}</p>
        <p class="text-gray-400 text-small text-left">Free Shipping</p>
      </div>
    </div>
  )
}
