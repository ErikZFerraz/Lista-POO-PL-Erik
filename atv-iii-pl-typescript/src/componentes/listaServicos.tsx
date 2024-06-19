/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./margin.css"

type props = {
tema: string
}

function ListaServicos(props: { tema: any; }) {
let tema = props.tema;

return (
<div className="container-fluid">
<div className="list-group">
<div className="margin-lista">
<h2 style={{ textAlign: 'center' }}>Nossos Serviços</h2>
<a href="#" className="list-group-item list-group-item-action">Banho</a>
<a href="#" className="list-group-item list-group-item-action">Tosa</a>
<a href="#" className="list-group-item list-group-item-action">Corte de unhas</a>
<a href="#" className="list-group-item list-group-item-action" style={{ background: tema, color: 'white' }} >Escovação</a>
<a href="#" className="list-group-item list-group-item-action">Consulta veterinária</a>
<a href="#" className="list-group-item list-group-item-action">Vacinação</a>
</div>
</div>
</div>
);
}

export default ListaServicos;