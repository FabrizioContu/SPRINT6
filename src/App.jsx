import { useContext, useState } from "react";
import ServiceList from "./pages/ServiceList";
import { ContextProvider } from "./Contexto/Contexto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicelist" element={<ServiceList />} />
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
