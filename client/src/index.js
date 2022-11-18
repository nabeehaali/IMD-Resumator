/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Routes  } from "react-router-dom";

   import Start from "./App";
   import Form from "./SubPages/Form";
   import Instruction from "./SubPages/Instruction";

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Start/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/Instruction" element={<Instruction/>} />
      </Routes>
      </BrowserRouter>,
      rootElement
    );

