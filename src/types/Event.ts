import { Date } from "mongoose"

export type Event = {
    name: string,
    date: Date,
    prducerEmail: string,
    description: string
}