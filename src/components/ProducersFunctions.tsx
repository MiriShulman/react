import { useState } from "react";
import {ProducerDetails} from "./ProducerDetails"
import { Producer } from "../types/Producer";

export const ProducersFunctions = (p: Producer[]) => {
    const [producers, setProducers] = useState<Producer[]>([]);

    const deleteProducer = (name: string) => {
        setProducers(producers.filter(p => p.name!==name))
    }

    const updateProducer = (name: string, address: string, phone: number, email: string ) => {
        let i=producers.findIndex(p=>p.name=name);
        producers[i].address=address;
        producers[i].phone=phone;
        producers[i].email=email;
        producers[i].name=name;
    }

    return (
        producers.forEach(p => {
            p.name;
            p.phone;
            p.email;
            p.address;
        })
    );
}