import React from "react";
import UserWelcomePage from "./UserWelcomePage"
import QuestionScreen from "./QuestionScreen";

export default function App () {
    
    const [displayNoneUserWelcomePage, setDisplayNoneUserWelcomePage] = React.useState("");
    const [displayNoneQuestionScreen, setDisplayNoneQuestionScreen] = React.useState("displayNone");

    function iniciarRecall () {
       setDisplayNoneUserWelcomePage("displayNone");
       setDisplayNoneQuestionScreen("");
    }

    return (
        <>
            <UserWelcomePage displayNoneUserWelcomePage={displayNoneUserWelcomePage} iniciarRecall={iniciarRecall}/>   
            <QuestionScreen displayNoneQuestionScreen={displayNoneQuestionScreen}/>
        </>
        
    )
}