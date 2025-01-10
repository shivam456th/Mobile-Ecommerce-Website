import React, { useContext } from "react";
import { Context } from "../Store";
import { IoCartOutline } from "react-icons/io5";

const AddToCart = () => {
  const { data, Cart, setCart } = useContext(Context);
  const total = Cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const discount = total > 500 ? 100 : 0; // Example discount logic

  const decrementQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const incrementQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  if (Cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen  text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl text-gray-400">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div><IoCartOutline className="text-black text-6xl" /></div>
          <h2 className="text-xl mt-4 text-black">Your Cart is Empty</h2>
          <button
            className="mt-6 px-6 py-2 bg-slate-300 text-gray-900 rounded-md shadow hover:bg-gray-400"
            onClick={() => window.location.href = "/shop"}
          >
            Go Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 p-6 min-h-screen">
      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Cart Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <div className="space-y-6">
            {Cart.map((product) => (
              <div
                key={product._id}
                className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-100 rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 rounded-md"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-black">
                    {product.title}
                  </h3>
                  <p className="text-sm font-semibold">{product.brand}</p>
                  <p className="text-sm">
                    Price:{" "}
                    <span className="font-bold text-gray-900">
                      ₹{(product.price * product.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-700 text-white px-3 py-1 rounded-md"
                    onClick={() => decrementQuantity(product._id)}
                  >
                    -
                  </button>
                  <span className="text-lg">{product.quantity}</span>
                  <button
                    className="bg-gray-700 text-white px-3 py-1 rounded-md"
                    onClick={() => incrementQuantity(product._id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Delivery</p>
              <p className="text-green-700">FREE</p>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-red-500">
              <p>Discount</p>
              <p>₹{discount}</p>
            </div>
            <hr className="border-gray-600" />
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p className="text-xl font-bold text-gray-900">
                ₹{(total - discount).toFixed(2)}
              </p>
            </div>
          </div>
          <button className="bg-black text-white w-full py-2 mt-4 rounded-md font-semibold hover:bg-gray-800">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
