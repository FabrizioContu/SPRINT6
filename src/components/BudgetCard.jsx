import React, { useContext } from "react";
import { Context } from "../Contexto/Contexto";

function BudgetCard() {
  const { handleSubmit, setName, setEmail, setPhone, name, email, phone } =
    useContext(Context);

  return (
    <div className="budget p-3">
      <form className="font-bold  pb-5" onSubmit={handleSubmit}>
        <h1 className="text-left text-3xl ms-10  py-5">Ask for budget</h1>

        <input
          className="border rounded-md p-2 w-48 "
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="border rounded-md p-2 mx-3 w-48"
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          className="border rounded-md p-2 w-48"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className="bg-green-700 p-2 text-white font-bold rounded-md ms-5 px-5 ring-1 ring-inset ring-green-700 hover:bg-white hover:text-green-700"
          type="submit"
        >
          Apply for budget
        </button>
      </form>
    </div>
  );
}

export default BudgetCard;
