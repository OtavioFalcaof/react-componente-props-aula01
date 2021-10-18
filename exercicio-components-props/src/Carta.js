import React from "react";

export default function Carta(props){
    return(
        <div>
            <h3>Olá {props.remetente} - {props.destino}</h3>
            <p>Estou escrevendo esta carta por causa da atividade que os alunos vão fazer,okay.<br/>
            Não desiste, continue fazendo as atividades, treinando e praticando.<br/>
            O céu é o limite!
            </p>
        </div>
    )
}