import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel.jsx";
import PhoneCase from "./PhoneCase";
import Card from "./Card";
import instance from "./Utils/instance";
import LottieLoader from "./LottieLoader.jsx";

const Header = () => {
  const brand = [
    { name: "phone" },
    { name: "phoneCase" },
    { name: "watch" },
    { name: "accessories" },
    { name: "Apple" },
    { name: "Samsung" },
    { name: "Nothing" },
    { name: "Fossil" },
    { name: "Others" },
  ];

  const [PhoneData, setPhoneData] = useState([]);
  const [watchData, setWatchData] = useState([]); 
  const [accessoriesData, setaccessoriesData] = useState([]); 
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const phoneResponse = await instance.get("/phone");
      const watchResponse = await instance.get("/watch");
      const accessoriesResponse = await instance.get("/accessories");
      setPhoneData(phoneResponse.data);
      setWatchData(watchResponse.data);
      setaccessoriesData(accessoriesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LottieLoader />
      ) : (
        <>
          {/* Brand Section */}
          <div className="md:px-14 px-2 md:py-5 py-2 gap-6">
            <div className="flex justify-between w-full overflow-x-auto space-x-4 md:px-0 scrollbar-hide">
              {brand.map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.name}`}
                  className="cursor-pointer bg-[#E1E3E5] w-32 hover:bg-slate-300 text-gray-950 text-sm font-bold py-2 px-4 rounded-full"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Section */}
          <div className="md:px-14 px-2 py-5">
            <p className="md:text-2xl font-semibold text-center">Phones</p>
            <div className="flex w-full overflow-x-auto space-x-4 md:px-0 px-4 py-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide">
              {PhoneData.length > 0 ? (
                PhoneData.map((products, index) => (
                  <Card key={index} products={products} />
                ))
              ) : (
                <p className="text-center text-gray-500">No phones available</p>
              )}
            </div>
          </div>

          {/* Watch Section */}
          <div className="md:px-14 px-2 py-5">
            <p className="md:text-2xl font-semibold text-center">
              Watch Collection
            </p>
            <div className="flex w-full overflow-x-auto space-x-4 md:px-0 px-4 py-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide">
              {watchData.length > 0 ? (
                watchData.map((products, index) => (
                  <Card key={index} products={products} />
                ))
              ) : (
                <p className="text-center text-gray-500">No watches available</p>
              )}
            </div>
          </div>

          {/* Slider Section */}
            <Carousel />

          {/* Watch Section */}
            <div className="md:px-14 px-2 py-5">
            <p className="md:text-2xl font-semibold text-center">
            Accessories
            </p>
            <div className="flex w-full overflow-x-auto space-x-4 md:px-0 px-4 py-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide">
              {accessoriesData.length > 0 ? (
                accessoriesData.map((products, index) => (
                  <Card key={index} products={products} />
                ))
              ) : (
                <p className="text-center text-gray-500">No watches available</p>
              )}
            </div>
          </div>

          <PhoneCase/>
        </>
      )}
    </>
  );
};

export default Header;
