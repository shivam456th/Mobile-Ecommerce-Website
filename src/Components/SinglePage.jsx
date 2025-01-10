import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import instance from "./Utils/instance";
import { Context } from "../Store";
import { toast } from "react-toastify";

const SinglePage = () => {
  const {addtocart} = useContext(Context)
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const notify = () => {
    toast.success('Product Added', {
      position: "top-right",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  async function fetchData() {
    const response = await instance.get(`/amazonpro/${id}`);
    setProduct(response.data);
  }

  // console.log(product);
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Back Button */}
      <h1
        className="text-2xl flex items-center cursor-pointer mb-6 px-4"
        onClick={() => navigate(-1)}
      >
        <FaAngleLeft className="mr-2" /> Back
      </h1>

      {/* Main Container */}
      <div className="min-h-screen flex justify-center items-center px-4 py-8">
        <div className="bg-slate-100 text-black p-6 flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto rounded-lg shadow-lg w-full">
          {/* Product Image */}
          <div className="flex-1 w-full md:w-auto">
            <img
              src={product.image} // Replace with your product image URL
              alt={product.brand || "Product Image"}
              className="rounded-lg max-w-full md:w-96"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {product.brand || "Product Name"}
            </h2>
            <p className="text-black mb-2">
              <span className="font-bold">Category:</span> {product.category || "N/A"}
            </p>
            <p className="text-black mb-2">
              <span className="font-bold">Brand:</span> {product.brand || "N/A"}
            </p>
            <p className="text-2xl font-bold text-green-500 mb-2">
              {product.price ? `₹${product.price}` : "₹0"}
            </p>
            <p className="text-black font-semibold mb-2">
              <span className="line-through">₹629</span>{" "}
              <span className="text-green-500">(68% OFF)</span>
            </p>
            <p className="text-green-500 mb-6">Inclusive of all taxes</p>
            <p className="text-black text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Add to Cart Button */}
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-300 w-full md:w-auto"  onClick={()=>{
                addtocart(product)
                notify()
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6M7 13l-.4-2m10.4 2l1.5 6M17 13l.4-2M6 5h15m-1 16a2 2 0 100-4 2 2 0 000 4zm-10 0a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
