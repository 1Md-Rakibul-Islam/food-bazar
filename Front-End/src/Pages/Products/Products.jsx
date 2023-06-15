import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [products]);

  // console.log(products);

  if (!products) {
    return <div>Loading.....</div>;
  }

  return (
    <section className="lg:mx-20 md:mx-10 mx-5 min-h-screen pt-32 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center md:gap-10 gap-5">
        {products?.map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
