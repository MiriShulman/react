import { Date } from "mongoose"

export type Event = {
    id: string,
    name: string,
    date: Date,
    prducerEmail: string,
    description: string
}