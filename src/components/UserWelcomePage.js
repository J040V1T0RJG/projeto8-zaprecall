import React from "react";


export default function UserWelcomePage ({displayNoneUserWelcomePage, iniciarRecall}) {

    return (
        <div className={`userWelcomePage ${displayNoneUserWelcomePage}`}>
            <img src="img/ZapRecall-Recursos/logo.png" ></img>
            <p>ZapRecall</p>
            <button onClick={() => iniciarRecall()}>Iniciar Recall!</button>  
        </div>
    )
}