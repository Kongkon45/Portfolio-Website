import React from "react";
// import GoogleMapReact from 'google-map-react';

const Contact = () => {
  
  return (
    <div className="bg-gray-200 py-10">
      <div className=" container mx-auto lg:flex gap-10">
      <div className=" w-[100%] lg:w-1/2 mb-10 lg:mb-0">
      <iframe className="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.147288283777!2d90.39584807389359!3d23.777768887727788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76ed53a1c07%3A0x920e087e6fd644a9!2sMohakhali%20Rail%20Gate!5e0!3m2!1sen!2sbd!4v1707925326737!5m2!1sen!2sbd"  width="100%" height="520" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="w-full lg:w-1/2 shadow-xl p-10 bg-gray-300 rounded-xl">
        <h3 className="text-center text-4xl font-bold">Contact Me </h3>
        <form>
          <label className="text-md font-bold" htmlFor="name">
            Name :
          </label>
          <input
            className="w-full py-2 px-5 border rounded-xl mt-2 mb-5"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
          />
          <label className="text-md font-bold" htmlFor="email">
            Email :
          </label>
          <input
            className="w-full py-2 px-5 border rounded-xl mt-2 mb-5"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
          />
          <label className="text-md font-bold" htmlFor="message">
            Message :
          </label>
          <textarea
            className="w-full py-2 px-5 rounded-xl border mt-2 mb-5"
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Enter your message..."
          ></textarea>
         <div className="w-full lg:w-32 mx-auto">
         <input
           className="bg-blue-400 w-full hover:bg-blue-500 py-2 px-10 rounded-2xl text-white cursor-pointer"
            type="submit"
            value="Send"
          />
         </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
