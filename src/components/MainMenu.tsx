import React from "react"
import {NavLink} from "react-router"
import {MenuForProducer} from "../components/MenuForProducer"
import { EventListForUser } from "./EventListForUsers"

export const MainMenu = () => {
    // const startDb = () => {
    //     // const express = require('express');
    //     const mongoose = require('mongoose');       

    // }
    return (
        <div>
            <NavLink to="/">ראשי</NavLink>
            <NavLink to="/MenuForProducer"> מפיק</NavLink>
            <NavLink to="/EventListForUsers">משתמש רגיל</NavLink>
        </div>
    )
}