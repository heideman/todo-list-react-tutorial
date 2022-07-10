import React from 'react';
import { Route, Routes, Switch } from "react-router-dom";
import './App.css';
import TodoContainer from "./components/TodoContainer";
import NotMatch from "./Error";
import About from "./About";
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<TodoContainer/>}>
                </Route>
                <Route path="/about/*" element={<About/>}>
                </Route>
                <Route path="*" element={<NotMatch/>}>
                </Route>
            </Routes>
        </>
    );
}

export default App;
