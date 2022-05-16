function WonLost (props) {

    if(props.statusOrder.length == 8) {
        if(props.counterRed > 0) {
            return (
                <div className="organizeFather">
                    <div className="organize">
                        <img src="img/ZapRecall-Recursos/sad.png"></img>
                        <p><strong>Puts...</strong></p>
                    </div>
                    <p>Ainda faltam alguns... <br></br> Mas não desanime</p>
                </div>
            )
        }
        else {
            return (
                <div className="organizeFather">
                    <div className="organize">
                        <img src="img/ZapRecall-Recursos/party.png"></img>
                        <p><strong>Parabéns!</strong></p>
                    </div>
                    <p>Você não esqueceu de <br></br> nenhum flashcard!</p>
                </div>  
            )
        }
    }
    else {
        return(<div></div>)
    }
}


export default function Footer ({counter, statusOrder, counterRed}) {
    return (
        <>
        <div className="footer">
            <WonLost counterRed={counterRed} statusOrder={statusOrder}/>
            <p>{counter}/8 CONCLUÍDOS</p>
            <div className="ionIconOrder">
                {statusOrder.map( (status, index) => {
                    if (status == "redIcon" ) {
                        return(
                            <div><ion-icon class="ionIconred" name="close-circle"></ion-icon></div>
                        )
                    }
                    else if (status == "yellowIcon") {
                        return(
                            <div><ion-icon class="ionIconyellow" name="help-circle"></ion-icon></div>
                        )
                    }
                    else if (status == "greenIcon") {
                        return(
                            <div><ion-icon class="ionIcongreen" name="checkmark-circle"></ion-icon></div>
                        )
                    }
                })}
            </div>
        </div>
        </>
    )
}