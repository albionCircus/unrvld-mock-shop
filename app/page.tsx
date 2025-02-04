
// 1. First things first, add a fetch request. I used: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

export default async function Home() {
  const data = await fetch('https://mock.shop/api?query={products(first:%2018){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}');
  const products = await data.json()
  console.log(products);
}