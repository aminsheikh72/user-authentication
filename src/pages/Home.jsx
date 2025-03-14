import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const {user}= useSelector((state)=> state.auth)

const navigate = useNavigate()


useEffect(()=>{
if(!user){
  navigate("/login")
}
},[user])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Auth App
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Experience the best of our platform. Login or register to get started
        with your journey.
      </p>
      <div className="mt-8">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="Hero"
          className="rounded-xl shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
