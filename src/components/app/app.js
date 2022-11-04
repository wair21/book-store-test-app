import React from "react";
import './app.css';
import { withBookstoreService } from "../hoc";
import { Route, Routes } from "react-router-dom";
import { HomePage, CardPage } from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={120} />
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
        </main>
      
    );
   
}

export default App;