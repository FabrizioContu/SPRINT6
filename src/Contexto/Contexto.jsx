import { createContext, useContext, useState, useEffect } from "react";
import { services } from "../services.js";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [service, setService] = useState(services);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budgetList, setBudgetList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [discount, setDiscount] = useState(false);

  const updateUrl = () => {
    const params = new URLSearchParams();

    services.forEach((service) => {
      params.set(service.title, service.checked.toString());
    });

    params.set("pages", page.toString());
    params.set("lang", language.toString());

    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  useEffect(() => {
    updateUrl();
  }, [services, page, language]);

  const toggleDiscount = () => {
    setDiscount((prevDiscount) => !prevDiscount);
  };

  const searchBudget = (searchTerm) => {
    const filteredBudget = [...budgetList].filter((budget) =>
      budget.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setBudgetList(filteredBudget);
  };

  const orderByName = () => {
    const sortedByName = [...budgetList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setBudgetList(sortedByName);
  };

  const orderByDate = () => {
    const sortedByDate = [...budgetList].sort((a, b) => b.date - a.date);
    setBudgetList(sortedByDate);
  };
  const orderByAmount = () => {
    const sortedByAmount = [...budgetList].sort((a, b) => a.total - b.total);
    setBudgetList(sortedByAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBudget({ name, phone, email, email, service });
    setName("");
    setPhone(0);
    setEmail("");
    setTotal(total);
  };

  function deleteTask(taskId) {
    setBudgetList(budgetList.filter((task) => task.id !== taskId));
  }

  function createBudget(budget) {
    setBudgetList([
      ...budgetList,
      {
        id: budgetList.length,
        name: budget.name,
        phone: budget.phone,
        email: budget.email,
        service: service.filter((s) => s.checked),
        pages: service.some((s) => s.title === "Web") ? page : undefined,
        languages: service.some((s) => s.title === "Web")
          ? language
          : undefined,
        date: new Date(),
        total,
      },
    ]);
  }

  const handleChange = (id) => {
    setService(
      services.map((service) => {
        if (service.id === id) {
          service.checked = !service.checked;
        }

        if (service.checked) {
          <div className="border-solid border-green-600"></div>;
        }
        return service;
      })
    );

    const selectedServices = services.filter((service) => service.checked);
    const newTotal = selectedServices.reduce(
      (acc, service) => acc + service.price,
      0
    );
    const totalPages = page * 30;
    const totalLanguages = language * 30;
    const totalUpdated = newTotal + totalPages + totalLanguages;

    setTotal(totalUpdated);
    updateUrl();
  };

  const handleMinusPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handlePlusPage = () => {
    setPage(page + 1);
  };

  const handleMinusLang = () => {
    if (language > 0) {
      setLanguage(language - 1);
    }
  };
  const handlePlusLang = () => {
    setLanguage(language + 1);
  };

  useEffect(() => {
    handleChange();
  }, [page, language]);

  useEffect(() => {
    setBudgetList(budgetList);
  }, []);

  return (
    <Context.Provider
      value={{
        total,
        setTotal,
        services,
        service,
        setService,
        handleChange,
        page,
        language,
        handleMinusPage,
        handlePlusPage,
        handleMinusLang,
        handlePlusLang,
        handleSubmit,
        createBudget,
        budgetList,
        setBudgetList,
        setEmail,
        setName,
        setPhone,
        name,
        email,
        phone,
        orderByAmount,
        orderByDate,
        orderByName,
        deleteTask,
        searchBudget,
        toggleDiscount,
        discount,
      }}
    >
      {children}
    </Context.Provider>
  );
};
