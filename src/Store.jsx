import React, { createContext, useEffect, useState } from "react";
import instance from "./Components/Utils/instance";
export const Context = createContext();

const Store = ({ children }) => {
  const [PhoneData, setPhoneData] = useState([]);
  const [WatchData, setWatchData] = useState([]);
  const [PhoneCaseData, setPhoneCaseData] = useState([]);
  const [data, setData] = useState([]);
  const [Cart, setCart] = useState([]); // Corrected variable name to follow camelCase convention
  const [searchInput, setsearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const phoneResponse = await instance.get("/phone");
      setPhoneData(phoneResponse.data);
    };

    const fetchWatchData = async () => {
      const watchResponse = await instance.get("/watch");
      setWatchData(watchResponse.data);
    };

    const fetchPhoneCaseData = async () => {
      const phoneCaseResponse = await instance.get("/phonecase"); // Corrected variable name for clarity
      setPhoneCaseData(phoneCaseResponse.data);
    };

    var fetchAmazonProData = async () => {
      const amazonProResponse = await instance.get("/amazonpro"); // Corrected variable name for clarity
      setData(amazonProResponse.data);
    };

    fetchData();
    fetchWatchData();
    fetchPhoneCaseData();
    fetchAmazonProData();
  }, []);

  function search() {
    let One = data.filter((e) => {
      return e.title.toLowerCase().includes(searchInput.toLowerCase())
    })
    setData(One)
  }

  useEffect(() => {
    search()
  }, [searchInput])

const addtocart = (item) => {
  setCart((prev)=>{
    const existingItem = prev.find((cartItem)=>cartItem.id===item._id);
    if (existingItem) {
      return prev.map((cartItem) => cartItem.id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    } else {
      return [...prev,{...item, quantity:1}];
    }
  })
}


  return (
    <Context.Provider value={{ PhoneData, WatchData, PhoneCaseData, data, addtocart, Cart, setCart, searchInput,setsearchInput, search}}>
      {children}
    </Context.Provider>
  );
};

export default Store;
