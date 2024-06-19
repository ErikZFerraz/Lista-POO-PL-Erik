/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./margin.css"

type props = {
tema: string
}

function ListaCliente(props: { tema: any; }) {
let tema = props.tema;

return (
<div className="container-fluid">
<div className="list-group">
<div className="margin-lista">
<h2 style={{ textAlign: 'center' }}>Nossos Clientes</h2>
<a href="#" className="list-group-item list-group-item-action">Paul Stanley</a>
<a href="#" className="list-group-item list-group-item-action">Janis Joplin</a>
<a href="#" className="list-group-item list-group-item-action">Detonator</a>
<a href="#" className="list-group-item list-group-item-action" style={{ background: tema, color: 'white' }} >Gene Simmons</a>
<a href="#" className="list-group-item list-group-item-action">David Bowie</a>
<a href="#" className="list-group-item list-group-item-action">Slash</a>
</div>
</div>
</div>
);
}

export default ListaCliente;