import React from "react"
import {NavLink} from "react-router"
import {ProducerDetails} from "./ProducerDetails"
import { ProducersFunctions } from "./ProducersFunctions"

export const MenuForProducer = () => {
    return (
        <div>
            <NavLink to="/">ראשי</NavLink>
            <NavLink to="/AddProducer">הוספת מפיקה</NavLink>
            <NavLink to="/ProducerDetails.context">מפיקה קיימת</NavLink>

            {/* נכנסים לעמוד ששם ניתן לראות את פרטי המפיקה עם אופציה לשינוי
ומופיעים רשימת הארועים עם אופציה להוספה / מחיקה 
כפתור ההוספה פותח חלון של הוספת ארוע
כל ארוע מופיע בתור קישור
לחיצה על הקישור מובילה לעמוד חדש ששם מופיעים פרטי האורע (עם אפשרות עריכה)
 */}

        </div>
    )
}
