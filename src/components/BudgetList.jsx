import React, { useContext } from "react";
import { Context } from "../Contexto/Contexto";

function BudgetList() {
  const {
    budgetList,
    orderByAmount,
    orderByDate,
    orderByName,
    deleteTask,
    searchTerm,
    searchBudget,
    discount,
  } = useContext(Context);

  if (budgetList.length === 0) {
    return (
      <h1 className="text-slate-600 text-center px-2 py-10 text-xl bg-amber-200 rounded-3xl mx-52 my-10 font-bold">
        "No budgets available at the moment"
      </h1>
    );
  }

  return (
    <div className="flex-wrap align-middle py-5 my-10">
      <div className="flex justify-end">
        <div>
          <input
            type="text"
            className="px-5 text-lg text-black bg-white border border-gray-400 rounded-lg"
            id="search"
            value={searchTerm}
            onChange={(e) => searchBudget(e.target.value)}
          />
        </div>

        <p className="mx-4 align-middle">Order by</p>
        <button
          className="px-5 text-lg bg-white border border-gray-400 rounded-lg"
          onClick={orderByName}
        >
          Name
        </button>
        <button
          className="px-5 text-lg bg-white mx-2 border border-gray-400 rounded-lg"
          onClick={orderByDate}
        >
          Date
        </button>
        <button
          className="px-5 text-lg bg-white border border-gray-400 rounded-lg"
          onClick={orderByAmount}
        >
          Amount
        </button>
      </div>

      {budgetList.map((budget, index) => (
        <div
          key={index}
          className="flex flex-row text-start justify-between border border-solid border-gray-300 py-6 my-5 px-10 rounded-3xl bg-white shadow-md"
        >
          <div className="">
            <div className="font-bold text-3xl">{budget.name}</div>
            <div>{budget.phone}</div>
            <div>{budget.email}</div>
          </div>
          <div className="font-bold">
            <p className="">Services required:</p>
            <div>
              {budget.service.map((s, index) => (
                <div key={index}>
                  <li>{s.title}</li>
                </div>
              ))}

              {budget.service.some((s) => s.title === "Web") && (
                <p>
                  ({`Pages: ${budget.pages}, Languages: ${budget.languages}`})
                </p>
              )}
            </div>
          </div>
          <div className="text-end">
            <p className="">Total: </p>
            <div className="font-bold text-3xl">
              {discount ? (budget.total * 80) / 100 : budget.total}
              <small>€</small>
            </div>
            <button
              className="bg-red-500 px-3 py-1 rounded-md mt-5 hover:bg-red-400 text-white"
              onClick={() => deleteTask(budget.id)}
            >
              Delete Budget
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BudgetList;
