import React from "react";
import {BrowserRouter as Router, Route, link, BrowserRouter, Routes, Link} from "react-router-dom"
import TodoApp from "./pages/todoApp";
import Home from "./pages/home";
import Form from "./pages/form";
import Slider from "./pages/slider";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/todoApp" element={<TodoApp/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/slider" element={<Slider/>}/>
            </Routes>
            <h1>Приветствую!</h1>
        </BrowserRouter>
    )
}

export default App