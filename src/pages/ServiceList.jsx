import React, { useContext, useEffect } from "react";
import { Context } from "../Contexto/Contexto";
import { Link } from "react-router-dom";
import WebService from "../components/WebService";
import BudgetCard from "../components/BudgetCard";
import BudgetList from "../components/BudgetList";

function ServiceList() {
  const {
    services,
    total,
    handleChange,
    toggleDiscount,
    discount,
    page,
    language,
  } = useContext(Context);

  return (
    <div>
      <section className="container bg-slate-200 m-auto p-20 text-center ">
        <Link to="/">
          <button className="bg-teal-700 rounded-md text-white p-3 font-bold text-lg mb-10 ring-1 ring-teal-700 hover:bg-white hover:text-teal-700">
            Go to Homepage
          </button>
        </Link>
        <h1 className="text-4xl text-slate-600 font-bold capitalize bg-amber-200 border border-solid border-gray-300 rounded-3xl p-20 mx-20">
          Get the best quality service
        </h1>
        <div className="py-2 mt-5 mx-96 bg-slate-700 rounded-3xl">
          <span className="me-5 align-top p-2 mt-1 font-medium text-white">
            Monthly Payment
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={discount}
              className="sr-only peer"
              onChange={toggleDiscount}
            />
            <div className="w-14 h-6 bg-teal-700 rounded-full peer peer-focus:ring-4  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-amber-200 after:border-amber-200 after:border after:rounded-full after:h-5 after:w-7 after:transition-all  peer-checked:bg-teal-700"></div>
            <span className="ms-5 font-medium text-white">Annual Payment</span>
          </label>
        </div>

        {services.map((servicio, index) => (
          <div
            key={servicio.id}
            className={
              servicio.checked
                ? "border border-green-700 flex-wrap align-middle py-10 my-10 mx-64 rounded-3xl bg-white shadow-md"
                : "flex-wrap align-middle py-10 my-10 mx-64 rounded-3xl bg-white shadow-md"
            }
          >
            <div className="flex-col inline-flex items-start ms-5 px-2">
              <h2 className="text-3xl font-bold pt-3">{servicio.title}</h2>
              <p className="ms-auto">{servicio.description} </p>
            </div>
            <div className="inline-flex px-10 mx-10 text-3xl font-bold align-middle ">
              <div className="flex-row flex-nowrap mx-1 p-1">
                <p className="flex-col mx-1 p-1 flex-nowrap  ">
                  <small className=" text-teal-700">20% Off</small>
                </p>
                {discount ? (servicio.price * 80) / 100 : servicio.price}
                <small>€</small>
              </div>
            </div>
            <p className=" inline-flex px-5 ms-20">
              <input
                type="checkbox"
                name={servicio.title}
                onChange={() => handleChange(servicio.id)}
              />
              <label htmlFor="checkbox" className="mx-3">
                <strong> Add {servicio.title}</strong>
              </label>
            </p>
            <div className="flex-row self-end justify-end">
              {servicio.checked && servicio.title === "Web" ? (
                <WebService />
              ) : null}
            </div>
          </div>
        ))}
        <p className="flex  justify-end rounded-3xl mx-64 px-10 pb-10 font-bold text-3xl">
          Total Budget: {discount ? (total * 80) / 100 : total} <small>€</small>
        </p>
        <div className="flex-wrap align-middle py-5 my-10 mx-64 rounded-3xl bg-white shadow-md">
          <BudgetCard />
        </div>
        <hr className="border-dashed my-4 border-black mx-64 " />
        <div className="py-5 my-10 mx-64 rounded-3xl">
          <p className="flex self-start ms-10 font-bold text-3xl ">
            Current Budget List:
          </p>

          <BudgetList />
        </div>
      </section>
    </div>
  );
}

export default ServiceList;
