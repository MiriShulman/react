import React, { useState } from "react"
import {NavLink} from "react-router"
import { ProducersFunctions } from "./ProducersFunctions";
import { ProducerDetails } from "./ProducerDetails";
export const ProducerLogin = () => {
    const [email,setEmail] = useState('');
    const returnDetailsAndList = () => {
        console.log(email)
        // let producers = ;
        //קריאת שרת לחיפוש
    }
    return <div>
        <NavLink to="/"> ראשי </NavLink><br />
        <label>הכנס מייל</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={() => ProducerDetails()}>שלח</button>
    </div>
}
