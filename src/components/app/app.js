import React from "react";
import './app.css';
import { withBookstoreService } from "../hoc";
import { Route, Routes } from "react-router-dom";
import { HomePage, CardPage } from "../pages";

const App = () => {
    return (
        <Routes>
            <Route 
                path="/"
                element={<HomePage/>}
                exact
            />
            <Route 
                path="/card"
                element={<CardPage/>}
            />
        </Routes>
    );
   
}

export default App;