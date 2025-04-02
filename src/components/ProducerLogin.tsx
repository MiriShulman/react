import React, { useState } from "react"
import {NavLink} from "react-router"
import { ProducersFunctions } from "./ProducersFunctions";
import { ProducerDetails } from "./ProducerDetails";
export const ProducerLogin = () => {
    const [email,setEmail] = useState('');
    const returnDetailsAndList = () => {
        console.log(email)
        let producers = ;
        //קריאת שרת לחיפוש
    }
    let result = returnDetailsAndList();
    return <div>
        <NavLink to="/">ראשי  </NavLink><br />
        <label>הכנס מייל</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button onSubmit={ProducerDetails=(result)}>שלח</button>
    </div>
}
