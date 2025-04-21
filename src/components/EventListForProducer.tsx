import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Event } from "../types/Event"; 
import { AddEvent } from "./AddEvent"; // Adjust the import based on your file structure

export const EventListForProducer: React.FC<{ email: string }> = ({ email }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleEventAdded = () => {
    // Logic to refresh or update the event list
    // For example, you might fetch the updated list from the server
    fetchEvents();
};

const fetchEvents = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/events");
        setEvents(response.data);
    } catch (error) {
        console.error("Error fetching events:", error);
    }
};

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events");
        // Assuming the response contains a list of events with a producerEmail field
        // const filteredEvents = response.data.filter((event: Event) => event.prducerEmail === email);
        const filteredEvents = response.data.filter((event: Event) => event.prducerEmail === email);
        setEvents(filteredEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("שגיאה בטעינת האירועים");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [email]); // Re-run effect if email changes

  if (loading) return <p>טוען אירועים...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">Event List</h1>
      <AddEvent onEventAdded={handleEventAdded} />
      <ul>
        {events.map((event: Event) => (
          <li key={event.id} className="mt-2">
            <Link to={`/event/${event.id}`} className="text-blue-500">{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};