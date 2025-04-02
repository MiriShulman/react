import { createContext, useState } from "react";
import { Producer } from "../types/Producer";
import { ProducerDetails } from "./ProducerDetails";


type ProducerDetailsContextType = {
    producers: Producer[],
    updateProducer: (email: string, newProducer: Producer) => void
}

// יצירה של קונטקסט
export const ToCreateContext = createContext<Partial<ProducerDetailsContextType>>({});

// קומפוננטה שמגדירה בתוכה את כל הערך של הקונטקסט
export const ToCreateProvider = (props: any) => {

    const [producers, setProducers] = //קריאת שרת במקום ההמשך...
    useState<Producer[]>([{
        name: 'Bati',
        email: '',
        address: '',
        phone: 0
    }]);


    const contextValue: ProducerDetailsContextType = {
        producers,
        updateProducer: (email: string, producer: Producer) => {
            const newProducer = producers.map(p => p.email === email ? producer : p);
            setProducers(newProducer);
        },

    }


    return <ToCreateContext.Provider value={contextValue}>
        {/* props.children: מאפיין קבוע שמכיל את התוכן שנשלח בתוך הקומפוננטה כאשר משתמשים בה */}
        { props.children }
        <ProducerDetails></ProducerDetails>
    </ToCreateContext.Provider>
}


