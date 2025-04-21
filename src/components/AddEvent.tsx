// import { useState } from "react";
// import axios from "axios";
// import { EventListForProducer } from "./EventListForProducer";

// export const AddEvent = ({ onEventAdded }) => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
  
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (e: any) =>  {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     axios.post("http://localhost:5000/api/events", { name, description })
//       .then(() => {
//         onEventAdded(); // קורא לפונקציה שמעדכנת את רשימת האירועים
//         setLoading(false);
//         setName("");
//         setDescription("");
//       })
//       .catch((err) => {
//         console.error("Error adding event:", err);
//         setError("שגיאה בהוספת האירוע");
//         setLoading(false);
//       });
//   }

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <h2 className="text-xl">הוספת אירוע</h2>
//       <input type="text" placeholder="שם אירוע" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 mt-2" />
//       <textarea placeholder="תיאור אירוע" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 mt-2" />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2" disabled={loading}>
//         {loading ? "מוסיף..." : "הוסף"}
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </form>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export const AddEvent: React.FC<{ onEventAdded: () => void; }> = ({ onEventAdded }) => {
  const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        axios.post("http://localhost:5000/api/events", { name, description })
            .then(() => {
                onEventAdded(); // Call the function to update the event list
                setLoading(false);
                setName("");
                setDescription("");
            })
            .catch((err) => {
                console.error("Error adding event:", err);
                setError("שגיאה בהוספת האירוע");
                setLoading(false);
            });
    }

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-xl">הוספת אירוע</h2>
            <input 
                type="text" 
                placeholder="שם אירוע" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="border p-2 mt-2" 
            />
            <textarea 
                placeholder="תיאור אירוע" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                className="border p-2 mt-2" 
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2" disabled={loading}>
                {loading ? "מוסיף..." : "הוסף"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}
