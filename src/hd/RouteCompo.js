import React from 'react';
import Home from './Home'
import Student from "./Student"
import Contact from "./Contact";
import UpdateCompo from "./UpdateCompo";
import EditFormCompo from "./EditCompo";
import {NavLink, Route, Routes } from "react-router-dom"
import "./Style.css"
import Store from "./Store";

import { useState } from "react";
function RouteCompo() {
    const [data, setdata] = useState([
        { Name: "Thor", Age: 24, Course: "MERN", Batch: "EA24" },
        { Name: "Hari", Age: 23, Course: "MERN", Batch: "EA24" },
        { Name: "Loki", Age: 34, Course: "MERN", Batch: "EA24" },
        { Name: "Thanos", Age: 24, Course: "MERN", Batch: "EA24" }
    ])
    return (
        <>
        <div className="route">
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/student"> Students</NavLink>
                <NavLink className="navlink" to="/contectus"> Contact US</NavLink>
        </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contectus" element={<Contact />} />
                {/* Student Table*/}
                <Route path="/student" element={
                    <Store.Provider value={{ rec: data, setRec: setdata }}>
                        <Student />
                    </Store.Provider>
                } />
                {/* Edit Form  */}
                <Route path="/editformcompo" element={
                    <Store.Provider value={{ rec: data, setRec: setdata }}>
                    <EditFormCompo />
                    </Store.Provider>
                } />
                {/* update Form*/}
                <Route path="/UpdateCompo" element={
                    <Store.Provider value={{ rec: data, setRec: setdata }}>
                        <UpdateCompo />
                    </Store.Provider>
                } />
            </Routes>
            </>
            )
}
export default RouteCompo