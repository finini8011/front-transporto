import { useParams } from "react-router-dom";

import Step3 from "../steps/Step3"
import Step2 from "./Step2";



export default function Steps() {
    const { id } = useParams()

    let components = {
        2: Step2,
        3: Step3,
    };
    const Step = components[id || 1] ?? null;
    return <Step step={id}/>
}