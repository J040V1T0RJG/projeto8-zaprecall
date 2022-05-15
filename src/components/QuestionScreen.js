import React from "react"
import Questions from "./Questions"
import Footer from "./Footer"

export default function QuestionScreen ({displayNoneQuestionScreen}) {

    const [counter, setCounter] = React.useState(2)

    function implementorCounterFooter () {
        setCounter(counter + 1)
    }



    return (
        <div className={`questionScreen ${displayNoneQuestionScreen}`}>
            <div className="top">
                <img src="img/ZapRecall-Recursos/logo-pequeno.png"></img>
                <p>ZapRecall</p>
            </div>
            <Questions />
            <Footer counter={counter}/>
        </div>
    )
}