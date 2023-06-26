import { useParams } from "react-router-dom";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "../steps/Step3"
import Step6 from "./Step6";
import Step11 from "./Step11";
import Step12 from "./Step12";
import Step13 from "./Step13";
import Step14 from "./Step14";
import Step22 from "./Step22";
import Step23 from "./Step23";
import Step24 from "./Step24";



export default function Steps() {
    const { id } = useParams()

    let components = {
        1: Step1,
        2: Step2,
        3: Step3,
        6: Step6,
        11: Step11,
        12: Step12,
        13: Step13,
        14: Step14,
        22: Step22,
        23: Step23,
        24: Step24,
    };
    
    const Step = components[id || 1] ?? null;
    return <Step step={id} />
}