import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Sign";
import Register from "./Register";
import Layout from "./Layout";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
         
        <Route path="/" element={<Layout />}>
           <Route path="Sign" element={<Sign />} />
           <Route path="Register" element={<Register />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };