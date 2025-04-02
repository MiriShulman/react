import { useState } from "react";
import {producerList} from "./ProducerDetails"

export const ProducersFunctions = (p: producerList) => {
    const [producers, setProducers] = useState<producerList[]>([]);

    const deleteProducer = (name: string) => {
        setProducers(producers.filter(p => p.name!==name))
    }

    const updateProducer = (name: string, ) => {
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