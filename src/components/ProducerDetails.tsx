// interface contact {phone: string, email: string, address: string }

// interface ProducerDetails {name: string, contactDetails: contact}
//העברת מייל בURL
import React, { useState } from "react"
import {NavLink} from "react-router"
import { EventListForProducer } from "./EventListForUsers";
export const ProducerDetails = () => {
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    const [email,setEmail] = useState('');
    const returnDetailsAndList = () => {
        console.log(email)
        return ;
        //קריאת שרת לחיפוש
    }
    let result = returnDetailsAndList();
    return <div>
        <NavLink to="/"> ראשי </NavLink><br />
        {/* how can i print this result */}
        returnDetailsAndList: 
        <label>הכנס מייל</label>
        <label></label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={returnDetailsAndList}>שלח</button>
        <EventListForProducer=(email)></EventListForProducer>
        //כפתור להוספת אירוע
    </div>
}
