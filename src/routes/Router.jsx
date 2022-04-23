import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NavBar from "../components/NavBar";
import AddNewBike from "../containers/AddNewBike";
import App from "../containers/App";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={App} />
        <Route path="/addNew" element={AddNewBike} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
