import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container bg-slate-100 m-auto p-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to our Budget platform!
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Discover personalized services tailored to meet your needs.
        </p>
        <div className="mx-36">
          <p className="text-xl text-gray-700 mb-8">
            We are delighted to have you here to explore all the incredible
            options we offer. On our website, we strive to provide services of
            the highest quality, tailored to your needs and preferences.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            In this space, you can explore a wide range of services, from web
            development to language translation, all designed to meet your
            expectations. Our goal is to facilitate the creation of your
            personalized budget, allowing you to select the services you truly
            need.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            How does it work? It's simple. Explore our list of services, check
            the options that interest you, and watch as your budget updates in
            real-time. Additionally, you can adjust the number of pages and the
            quantity of languages according to your specific requirements. We
            want you to have total control over your experience on our platform.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            We are committed to providing you with a smooth and transparent
            experience. If you ever need assistance, our support team is here to
            guide you. Make the most of your visit, discover the possibilities
            we offer, and create a budget that perfectly suits your needs. Thank
            you for choosing us and welcome to our community!
          </p>
          <svg
            className="w-16 h-16 text-teal-700 mx-auto mb-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <Link to="/servicelist">
          <button className="bg-teal-700 rounded-md text-white p-3 font-bold text-lg mb-10 ring-1 ring-teal-700 hover:bg-white hover:text-teal-700">
            Go to Budget Calculator
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
