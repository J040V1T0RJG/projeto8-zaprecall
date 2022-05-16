import React from "react"
import Questions from "./Questions"
import Footer from "./Footer"

export default function QuestionScreen ({displayNoneQuestionScreen}) {

    const [counter, setCounter] = React.useState(0);
    const [counterRed, setCounterRed] = React.useState(0);
    const [statusOrder, setStatusOrder] = React.useState([]);
    

    function implementorCounterFooterRed () {
        setCounter(counter + 1)
        setCounterRed(counterRed + 1)
        setStatusOrder([...statusOrder, "redIcon"])
    }
    function implementorCounterFooterYellow () {
        setCounter(counter + 1)
        setStatusOrder([...statusOrder, "yellowIcon"])
    }
    function implementorCounterFooterGreen () {
        setCounter(counter + 1)
        setStatusOrder([...statusOrder, "greenIcon"])
    }



    return (
        <div className={`questionScreen ${displayNoneQuestionScreen}`}>
            <div className="top">
                <img src="img/ZapRecall-Recursos/logo-pequeno.png"></img>
                <p>ZapRecall</p>
            </div>
            <Questions  
                implementorCounterFooterRed={implementorCounterFooterRed} 
                implementorCounterFooterYellow={implementorCounterFooterYellow} 
                implementorCounterFooterGreen={implementorCounterFooterGreen} 
            />
            <Footer statusOrder={statusOrder} counter={counter} counterRed={counterRed}/> 
        </div>
    )
}