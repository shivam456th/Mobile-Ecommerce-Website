import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import Card from '../Components/Card';
import instance from '../Components/Utils/instance';
import LottieLoader from '../Components/LottieLoader'

const Nothing = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await instance.get("/phone");
      console.log(response);
      // Filter only Nothing products
      const nothingPhones = response.data.filter(product => product.brand === "Nothing");
      setData(nothingPhones);
    } catch (error) {
      console.error("Error fetching Nothing phones:", error);
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
        <div className="md:px-14 px-2 py-5">
          <h1 className="text-3xl flex items-center">
            <span onClick={() => navigate(-1)} className="text-blue-200 cursor-pointer">
              <IoChevronBackOutline />
            </span> 
            Back
          </h1>
          <p className="md:text-2xl font-semibold text-center">Nothing</p>
          <div className="flex w-full overflow-x-auto space-x-4 md:px-0 px-4 py-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide">
            {data.map((product, index) => (
              <Card key={index} products={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Nothing;
