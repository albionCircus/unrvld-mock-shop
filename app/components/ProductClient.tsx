"use client";

import { useState } from "react";
import Image from "next/image";
import Bounded from "./Bounded";

// Define Type
type Product = {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: {
      node: {
        price: {
          amount: number;
        };
      };
    }[];
  };
};

export default function ProductList({ products }: { products: Product[] }) {
  
  const [sortPrice, setSortPrice] = useState<string>("default");
  const [genderFilter, setGenderFilter] = useState<string>("all");

  const filteredProducts = products.filter((product) => {
    if (genderFilter === "all") return true;
    if (genderFilter === "men") return /\bmen\b/i.test(product.title);
    if (genderFilter === "women") return /\bwomen\b/i.test(product.title);
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.variants.edges[0]?.node.price.amount ?? 0;
    const priceB = b.variants.edges[0]?.node.price.amount ?? 0;

    if (sortPrice === "low-high") return priceA - priceB;
    if (sortPrice === "high-low") return priceB - priceA;

    return 0; // Default order
  });

  return (
    <Bounded>
      <header className="my-10">
        <h1 className="text-center">Products</h1>
      </header>
      <div className="flex gap-4 mb-6">
        <select className="border p-2 rounded" value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
          <option value="default">Sort by Price</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
        <select className="border p-2 rounded" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="all">Gender</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <article
            key={product.id}
            className="flex h-full flex-col justify-between p-5 bg-gray-100 border-2 border-slate-100 rounded-lg hover:border-2 hover:border-green-500"
          >
            <h3 className="text-green-500">{product.title}</h3>
            <p className="py-3">{product.description}</p>
            <Image
              src={product.featuredImage.url}
              width={228}
              height={228}
              alt={product.title}
              className="m-auto"
            />
            <button className="mx-auto mt-4 font-bold text-green hover:before:bg-greenborder-green-500 relative h-[50px] w-40 overflow-hidden border border-green-500 bg-white px-3 text-green-500 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full rounded">
              <span className="relative z-10">
                {product.variants.edges[0]?.node.price.amount
                  ? `£${parseFloat(product.variants.edges[0].node.price.amount.toString())
                      .toFixed(2)
                      .replace(/\.00$/, "")}`
                  : "No price available"}
              </span>
            </button>
          </article>
        ))}
      </div>
    </Bounded>
  );
}