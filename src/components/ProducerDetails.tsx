//העברת מייל בURL
import { useState } from "react"
import {NavLink} from "react-router"
import EventListForProducer from "./EventDetailsForProducer";

export const ProducerDetails = () => {
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    const [email,setEmail] = useState("");
    const returnDetailsAndList = () => {
        console.log(email)
        //קריאת שרת לחיפוש
    }
    // let result = returnDetailsAndList();
    return <div>
        <NavLink to="/"> ראשי </NavLink><br />
        {/* how can i print this result */}
        <label>הכנס מייל</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {/* <button onClick={returnDetailsAndList}>שלח</button> */}
        <button onClick={returnDetailsAndList}>שלח</button>
        {/* <button onSubmit={EventListForProducer(email)}>שלח</button> */}
 
        {/* Render the EventListForProducer component with the email prop */}

        <EventListForProducer email={email} />
        {/* You can add a button for adding events here */}
        //כפתור להוספת אירוע
    </div>
};

