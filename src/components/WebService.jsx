import React, { useContext, useState } from "react";
import { Context } from "../Contexto/Contexto";
import { BsInfoCircle } from "react-icons/bs";

function WebService() {
  const [modalPage, setModalPage] = useState(false);
  const [modalLanguage, setModalLanguage] = useState(false);

  const {
    handleMinusPage,
    handlePlusPage,
    handleMinusLang,
    handlePlusLang,
    language,
    page,
  } = useContext(Context);
  return (
    <div className="flex-col self-end rounded-3xl me-6 p-5 font-bold my-1">
      <div className="pages container self-end flex justify-end py-2 items-center">
        <div className="inline-flex items-center">
          <BsInfoCircle
            className="mr-2 cursor-pointer"
            onClick={() => setModalPage(true)}
          />
          <p className="pt-2">Number of Pages</p>
        </div>
        <button
          className="m-2 px-1 border border-gray-400 rounded-2xl"
          onClick={handleMinusPage}
        >
          -
        </button>
        <input
          type="text"
          value={page}
          className="input mt-1 border border-gray-400 input-bordered rounded-md h-8 text-center w-10 input-xs max-w-xs"
          readOnly
        />
        <button
          className="text-neutral-content m-2 px-1 border border-gray-400 rounded-2xl"
          onClick={handlePlusPage}
        >
          +
        </button>
      </div>
      <div className="languages container flex justify-end py-2 items-center">
        <div className="inline-flex items-center">
          <BsInfoCircle
            className="mr-2 cursor-pointer"
            onClick={() => setModalLanguage(true)}
          />
          <p className="pt-2">Number of Languages</p>
        </div>

        <button
          className="m-2 px-1 border border-gray-400 rounded-2xl"
          onClick={handleMinusLang}
        >
          -
        </button>
        <input
          type="text"
          value={language}
          className="input mt-1 border border-gray-400 input-bordered rounded-md h-8 text-center w-10 input-xs max-w-xs"
          readOnly
        />
        <button
          className="text-neutral-content m-2 px-1 border border-gray-400  rounded-2xl"
          onClick={handlePlusLang}
        >
          +
        </button>
        {modalPage && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              &#8203;
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className=" p-4 flex-nowrap">
                  <p className="flex justify-center text-2xl font-bold mb-2 py-6">
                    Number of pages
                  </p>
                  <p className="flex text-lg text-center bg-slate-300 rounded-md py-10">
                    Add the number of pages you might need to complete your Web
                    Project. The additional cost of each page is 30€ if you
                    choose MONTHLY payment, and 24€ if you choose ANNUAL
                    payment.
                  </p>
                </div>
                <div className="p-4 flex">
                  <button
                    onClick={() => setModalPage(false)}
                    className="bg-green-700 text-white p-2 rounded-md flex-auto ring-1 ring-inset ring-green-700 hover:bg-white hover:text-green-700 "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {modalLanguage && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              &#8203;
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className=" p-4 flex-nowrap">
                  <p className="flex justify-center text-2xl font-bold mb-2 py-6">
                    Number of languages
                  </p>
                  <p className="flex text-lg text-center bg-slate-300 rounded-md py-10">
                    Add the number of languages you might need for your Web
                    Project. The additional cost of each language is 30€ if you
                    choose MONTHLY payment, and 24€ if you choose ANNUAL
                    payment.
                  </p>
                </div>
                <div className="p-4 flex">
                  <button
                    onClick={() => setModalLanguage(false)}
                    className="bg-green-700 text-white p-2 rounded-md flex-auto ring-1 ring-inset ring-green-700 hover:bg-white hover:text-green-700 "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WebService;
