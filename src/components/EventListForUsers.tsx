import React from "react"
import {NavLink} from "react-router"
export const EventListForUser = () => {
    return <div>
        <NavLink to="/">ראשי</NavLink>
        <NavLink to="/producerMenu">מפיק</NavLink>
        <NavLink to="/eventListForUser">משתמש רגיל</NavLink>
    </div>
}