import React from "react";

const dataQuestions = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é _",
        answer: "Uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões"
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "Interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências"
    }, 
    {
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes"
    },
    {
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
]

//ramdomização possivelmente falsa
dataQuestions.sort(comparador)
function comparador() {
    return Math.random() - 0.5;
}

function Question (props) {

    const [questionPosition, setQuestionPosition] = React.useState("");
    const [questionPositionColor, setQuestionPositionColor] = React.useState("displayNone");
    const [question, setQuestion] = React.useState("displayNone");
    const [answer, setAnswer] = React.useState("displayNone");
    const [nameIcon, setNameIcon] = React.useState("add-circle-outline")
    
    function toQuestion () {
        setQuestionPosition("displayNone");
        setQuestion("");
    }
    function toAnswer () {
        setQuestion("displayNone");
        setAnswer("");
    }

    const [red, setRed] = React.useState("");
    const [yellow, setYellow] = React.useState("");
    const [green, setGreen] = React.useState("");


    function addClassRed () {
        setRed("red")
        setNameIcon("close-circle")
    }

    function addClassYellow () {
        setYellow("yellow")
        setNameIcon("help-circle")
    }

    function addClassGreen () {
        setGreen("green")
        setNameIcon("checkmark-circle")
    }

    function doubleRed () {
        props.implementorCounterFooterRed();
        addClassRed();
        setQuestionPosition("displayNone");
        setQuestionPositionColor("");
        setQuestion("displayNone");
        setAnswer("displayNone");
        
    }

    function doubleYellow () {
        props.implementorCounterFooterYellow();
        addClassYellow();
        setQuestionPosition("displayNone");
        setQuestionPositionColor("");
        setQuestion("displayNone");
        setAnswer("displayNone");
    }

    function doubleGreen () {
        props.implementorCounterFooterGreen();
        addClassGreen();
        setQuestionPosition("displayNone");
        setQuestionPositionColor("");
        setQuestion("displayNone");
        setAnswer("displayNone");
    }


    return (
        <div className="motherQuestions">
            <div className={`questionPosition ${questionPosition}`}>
                <p className={`${red} ${yellow} ${green}`}>Pergunta {props.questionPosition} </p>
                <ion-icon  name="play-outline" onClick={() => toQuestion()}></ion-icon>
            </div>

            <div className={`questionPosition ${questionPositionColor}`}>
                <p className={`${red} ${yellow} ${green}`}>Pergunta {props.questionPosition} </p>
                <ion-icon class={`ionIcon${red}${yellow}${green}`} name={nameIcon}></ion-icon>
            </div>

            
            <div className={`question ${question}`}>
                <p>{props.question}</p>
                <img src="img/ZapRecall-Recursos/setinha.png" onClick={() => toAnswer()}></img>
            </div>

            <div className={`answer ${answer}`}>
                <p>{props.answer}</p>
                <div className="answerOptions">
                    <div onClick={() => doubleRed()}><p>Não <br></br> lembrei</p></div>
                    <div onClick={() => doubleYellow()}><p>Quase não lembrei</p></div>
                    <div onClick={() => doubleGreen()}><p>Zap!</p></div>
                </div>
            </div>
        </div>
    )
}

export default function Questions ({implementorCounterFooterRed, implementorCounterFooterYellow, implementorCounterFooterGreen}) {
    return (
        <div>
            {dataQuestions.map( (newArrayQuestion, index) => (
                <Question 
                    questionPosition={index + 1} 
                    question={newArrayQuestion.question} 
                    answer={newArrayQuestion.answer} 
                    implementorCounterFooterRed={implementorCounterFooterRed} 
                    implementorCounterFooterYellow={implementorCounterFooterYellow} 
                    implementorCounterFooterGreen={implementorCounterFooterGreen} 

                />
            ))}
        </div>
    )
}