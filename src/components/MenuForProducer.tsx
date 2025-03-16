import ProducerDetails from "./ProducerDetails"
import { ProducersFunctions } from "./ProducersFunctions"

export const MenuForProducer = (p: ProducerDetails) => {
    return (
        <div>
            <button onSubmit={ProducersFunctions(p)}>for add producer</button>
            <button onSubmit={ProducersFunctions}>for exist producer</button>


            {/* נכנסים לעמוד ששם ניתן לראות את פרטי המפיקה עם אופציה לשינוי
ומופיעים רשימת הארועים עם אופציה להוספה / מחיקה 
כפתור ההוספה פותח חלון של הוספת ארוע
כל ארוע מופיע בתור קישור
לחיצה על הקישור מובילה לעמוד חדש ששם מופיעים פרטי האורע (עם אפשרות עריכה)
 */}

        </div>
    )
}