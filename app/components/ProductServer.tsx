import ProductList from "./ProductClient";

// Product represents a single product entity
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

// GraphQLResponse represents the entire API response
type GraphQLResponse = {
  data: {
    products: {
      edges: {
        node: Product;
      }[];
    };
  };
};

// I've gone for the 2 type approach above as the API reponse is more complex than just a list of product objects.
// It has metadata (data, edges, etc.), which needs to be modelled separately. This will also keep types modular and reusable.
// Defining a separate Product type makes the code cleaner and easier to understand. It also allows you to use it independently of API responses.

export default async function Products() {
  const request = await fetch('https://mock.shop/api?query={products(first:%2018){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}');
  // With a bit more time I'd have added error handling here
  const response: GraphQLResponse = await request.json();
  console.log(response); // This console.log tells me the products are an object and nested inside: data > products > edges (so will have to be mapped over accordingly)
  const products = response.data.products.edges.map((edge) => edge.node);
  console.log(products); // Now returns an array of objects so we're good to go

  return <ProductList products={products} />; // Pass data down to client / child component
}