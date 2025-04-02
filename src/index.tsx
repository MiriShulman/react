// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import {App} from "./App.tsx"

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App.tsx';
import {  BrowserRouter,Routes, Route } from "react-router";
// import reportWebVitals from './reportWebVitals';
import {MainMenu} from './components/MainMenu.tsx'
import {MenuForProducer} from './components/MenuForProducer.tsx'
import { EventListForUser } from './components/EventListForUsers.tsx';
import { AddProducer } from './components/AddProducer.tsx';
import { ProducerDetails } from './components/ProducerDetails.tsx';
import EventDetailsForProducer from "./components/EventDetailsForProducer.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    {/* <MainMenu /> */}
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/MenuForProducer" element={<MenuForProducer />} />
          <Route path="/EventListForUser" element={<EventListForUser />} />
          <Route path="/AddProducer" element={<AddProducer />} />
          <Route path="/EventDetailsForProducer" element={<EventDetailsForProducer/>} />
          <Route path="/ProducerDetails" element={<ProducerDetails />} />
          {/*   <Route path="/addProducer" element={<AddProducer />} />
          <Route path="/addProducer" element={<AddProducer />} />
          <Route path="/addProducer" element={<AddProducer />} />
          <Route path="/addProducer" element={<AddProducer />} /> */}
        </Routes>
        </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
