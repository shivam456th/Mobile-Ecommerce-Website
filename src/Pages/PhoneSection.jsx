import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Card from "../Components/Card";
import instance from "../Components/Utils/instance";
import LottieLoader from "../Components/LottieLoader";

const PhoneSection = () => {
  const navigate = useNavigate();

  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await instance.get("/phone");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching phone data:", error);
    } finally {
      setLoading(false); // Ensure loading stops regardless of success or failure
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {Loading ? (
        <LottieLoader />
      ) : (
        <div className="md:px-14 px-2 py-5">
          <p className="md:text-2xl font-semibold text-center">Phones</p>
          <h1 className="text-3xl flex items-center">
            <span onClick={() => navigate(-1)} className="text-blue-200">
              <IoChevronBackOutline className="cursor-pointer" />
            </span>
            Back
          </h1>
          <div className="flex w-full overflow-x-auto space-x-4 md:px-0 px-4 py-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide">
            {Data.map((products, index) => (
              <Card key={index} products={products} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneSection;
