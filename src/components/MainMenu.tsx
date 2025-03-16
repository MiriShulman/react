import {MenuForProducer} from "../components/MenuForProducer"
import { EventListForUsers } from "./EventListForUsers"

export const MainMenu = () => {
    return (
        <div>
            <button onSubmit={MenuForProducer}>i am a producer</button>
            <button onSubmit={EventListForUsers}>i am a user</button>
        </div>
    )
}