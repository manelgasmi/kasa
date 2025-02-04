import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Error404 from "../pages/error404/Error404";
import Home from "../pages/home/Home";
import AboutUS from "../pages/about-us/AboutUS";
import Logement from "../pages/logement/Logement";
import Header from "../components/header/Header";

const Navigation = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/about-us" element={<AboutUS/>} />
        <Route path="/logement/:id" element={<Logement/>} />
        <Route path="/" element={<Home />} />
        <Route path="/error-404" element= {<Error404 />}/>
        <Route path="/*" element={<Navigate replace to ="/error-404"/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
