import { useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Step123 from "./steps/123";
import Step4 from "./steps/4";
import Step51 from "./steps/5.1";
import Step52 from "./steps/5.2";
import Step61 from "./steps/6.1";
import Step62 from "./steps/6.2";
import Step63 from "./steps/6.3";
import Step71 from "./steps/7.1";
import Step72 from "./steps/7.2";
import Step8 from "./steps/8";
import Step9 from "./steps/9";
import Step10 from "./steps/10";
import Step111 from "./steps/11.1";
import Step112 from "./steps/11.2";
import Step113 from "./steps/11.3";
import Step114 from "./steps/11.4";
import Step12 from "./steps/12";
import Step13 from "./steps/13";
import Step14 from "./steps/14";
import Step15 from "./steps/15";
import Step16 from "./steps/16";
import Step17 from "./steps/17";
import Step181 from "./steps/18.1";
import Step182 from "./steps/18.2";
import Step19 from "./steps/19";
import Step20 from "./steps/20";
import Step21 from "./steps/21";
import Step22 from "./steps/22";
import Step23 from "./steps/23";
import Step24 from "./steps/24";

export default function Steps() {
    const { id } = useParams()
    const { steps } = useStateContext()

    let components = {
        1: Step123,
        2: Step123,
        3: Step123,
        4: Step4,
        5: Step51,
        6: Step52,
        7: Step61,
        8: Step62,
        9: Step63,
        10: Step71,
        11: Step72,
        12: Step8,
        13: Step9,
        14: Step10,
        15: Step111,
        16: Step112,
        17: Step113,
        18: Step114,
        19: Step12,
        20: Step13,
        21: Step14,
        22: Step15,
        23: Step16,
        24: Step17,
        25: Step181,
        26: Step182,
        27: Step19,
        28: Step20,
        29: Step21,
        30: Step22,
        31: Step23,
        32: Step24
    };
        const Step = components[id || 1] ?? null;
        if(id == 1 || id == 2 || id == 3) {
            return <Step steps_id={id}/>
        } 
        return <Step />
}