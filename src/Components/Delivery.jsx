import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-red-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1150px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />
        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">Get The App</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Limitless Convenience on-Demand</h1>
            <p>
            Welcome to our seamless culinary experience, where flavor meets convenience at your doorstep. Our dedicated delivery service ensures that the exquisite dishes crafted by our talented chefs reach you with the same freshness and quality that you'd expect at our restaurant. From the sizzling grills to the savory aromas, we take pride in delivering not just meals but moments of joy to your table. Enjoy the ease of ordering through our user-friendly website, and rest assured that our efficient delivery team is committed to bringing your favorite flavors right to your door. Indulge in the convenience of gourmet dining from the comfort of your home, because great food is meant to be savored, wherever you are!
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
