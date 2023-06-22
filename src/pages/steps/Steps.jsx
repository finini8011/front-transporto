import { useParams } from "react-router-dom";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "../steps/Step3"
import Step12 from "../steps/Step12"
import Step13 from "../steps/Step13"



export default function Steps() {
    const { id } = useParams()

    let components = {
        1: Step1,
        2: Step2,
        3: Step3,
        12: Step12,
        13: Step13,

    };
    const Step = components[id || 1] ?? null;
    return <Step step={id}/>
}