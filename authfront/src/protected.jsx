import "./pro.css"
import { useContext } from "react";
import { Context } from "./context";
function Protected(){
    const {mess}= useContext(Context)
    return(
        <>
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <p class="title">Welcome</p>
            <p>{mess}😎</p>
        </div>
    </div>
</div>
        </>
    )
}
export default Protected;