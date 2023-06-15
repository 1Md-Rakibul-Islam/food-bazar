import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import ProductCard from "../../../Components/ProductCard";
import { FaExternalLinkAlt } from "react-icons/fa";
import Process from "./Process/Process";

// https://i.ibb.co/GvqQXZz/bg.jpg
// https://i.ibb.co/n07XcFS/bg-regis.jpg
// https://i.ibb.co/TPc5F3p/footerimg.jpg
// https://i.ibb.co/LJVwS6H/footerimg.jpg
// https://i.ibb.co/R7wvt1W/kopi-kita.jpg
// https://i.ibb.co/zmxwT5f/machine.png

const Home = () => {

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
    <div className="min-h-screen">
      <Banner />
      <section className="my-20 lg:mx-20 md:mx-10 mx-5">
        <h2 className="text-green-600 text-center mb-10 text-4xl font-bold">
          Our Prodects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center md:gap-10 gap-5">
          {products?.slice(0, 3).map((product) => (
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
        <Link to={"/products"}>
          <button type="button" class="w-40 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">See More</button>
        </Link>
        </div>
      </section>
      <Process />
    </div>
  );
};

export default Home;
