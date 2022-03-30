import React from "react";
import { Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Greeting />} />
        </Routes>
    );
}

export default App;