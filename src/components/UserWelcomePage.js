import React from "react";


function Page (props) {

    const classDisplayNoneActive = "userWelcomePage displayNone";
    const classDisplayNoneDisabled = "userWelcomePage";
    const [displayNone, setDisplayNone] = React.useState(classDisplayNoneDisabled);

    function iniciarRecall () {
       setDisplayNone(classDisplayNoneActive);
    }

    return (
        <div className={displayNone}>
            <img src="img/ZapRecall-Recursos/logo.png" ></img>
            <p>ZapRecall</p>
            <button onClick={() => iniciarRecall()}>Iniciar Recall!</button>  
        </div>
    )
}





export default function UserWelcomePage () {
    return (
        <Page />
    )
}