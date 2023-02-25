import { For } from "solid-js"
import { A } from "solid-start/router"

const mockDynamicHeader: { title: string; url: string }[] = [
  { title: "Best Deals", url: "/" },
  { title: "Best Sellers", url: "/" },
  { title: "Free Shipping", url: "/" },
  { title: "Gaming Laptops", url: "/" },
  { title: "Routers", url: "/" },
  { title: "Monitors", url: "/" },
  { title: "Printers", url: "/" },
  { title: "Keyboards", url: "/" },
  { title: "Accessories", url: "/" },
  { title: "Widgets", url: "/" },
  { title: "Gadgets", url: "/" },
  { title: "Gizmos", url: "/" },
]

export default function DynamicHeader() {
  return (
    <div class="flex justify-between px-4 py-2 bg-[#f4f5f7] text-black justify-items-start">
      <For each={mockDynamicHeader}>
        {({ url, title }) => (
          <A href={url}>
            <span class="hover:underline hover:underline-offset-2 hover:decoration-indigo-500 hover:decoration-4 hover:z-50">
              {title}
            </span>
          </A>
        )}
      </For>
    </div>
  )
}
