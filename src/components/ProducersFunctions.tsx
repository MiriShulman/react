import { useState } from "react";
import ProducerDetails from "./ProducerDetails"
import contact from "./ProducerDetails"

export const ProducersFunctions = (p: ProducerDetails) => {
    const [producers, setProducers] = useState<ProducerDetails[]>([]);

    const addProducer = (producer: ProducerDetails) => {
        setProducers([...producers, producer]);
    }

    const deleteProducer = (name: string) => {
        setProducers(producers.filter(p => p.name!==name))
    }

    const updateProducer = (name: string, contact: contact) => {
        let i=producers.findIndex(p=>p.name=name);
        producers[i].contactDetails.address=contact.contactDetails.address;
        producers[i].contactDetails.phone=contact.contactDetails.phone;
        producers[i].contactDetails.email=contact.contactDetails.email;
    }

    return (
        producers.forEach(p => {
            p.name;
            p.contactDetails.phone;
            p.contactDetails.email;
            p.contactDetails.address;
        })
    );
}