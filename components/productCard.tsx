import React from "react"
import Image from "next/image"
import Link from "next/link"

function ProductCard() {
  return (
    <Link href="/product/123">
      <div className="p-2 border border-gray-400 rounded-lg">
        <div className="aspect-square relative w-full">
          <Image
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="product name"
            fill={true}
            className="object-cover absolute rounded-lg"
            unoptimized={true}
          />
        </div>
        <div>
          <span className="font-bold text-lg block">$Price</span>
          <p className="text-gray-700">Product Title</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
