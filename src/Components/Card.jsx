import React from "react";
import { Link } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <>
        <Link
          to={`/data/${products._id}`}
          key={products.id}
          className="w-44 md:w-72 flex-shrink-0 mx-2 my-5 p-2 bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300"
        >
          <div
            className="w-fit flex-shrink-0 mx-2 my-5 p-2 bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300"
          >
            <img
              className="w-60 h-600 object-cover rounded-xl"
              src={products.image}
              alt="Product Image"
            />
            <div className="p-4">
            <p className="text-2xl font-bold text-gray-800">{products.title}</p>
            <p className="text-sm font-semibold text-gray-800">
              {products.brand}
            </p>
            <p className="text-sm font-semibold text-gray-800">
              <i className="line-through">
                ${Math.floor(products.previousPrice)}
              </i>{" "}
              <span className="text-red-500 font-bold">
                {Math.floor(Math.random() * 100) + "% off"}
              </span>
            </p>
            <p className="text-xl font-semibold text-gray-800">
              Rs {Math.floor(products.price)}
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300">
              Buy Now
            </button>
          </div>
          </div>
        </Link>
    </>
  );
};

export default Card;
