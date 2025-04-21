import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Event } from "../types/Event";

export const EventListForUser = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("http://localhost:5000/api/events") // התאימי לכתובת השרת שלך
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setError("שגיאה בטעינת האירועים");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>טוען אירועים...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">רשימת אירועים</h1>
      <ul>
        {events.map((event: Event) => (
          <li key={event.id} className="mt-2">
            <Link to={`/event/${event.id}`} className="text-blue-500">{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
