/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./margin.css"

type props = {
tema: string
}

function ListaProdutos(props: { tema: any; }) {
let tema = props.tema;

return (
<div className="container-fluid">
<div className="list-group">
<div className="margin-lista">
<h2 style={{ textAlign: 'center' }}>Nossos Produtos</h2>
<a href="#" className="list-group-item list-group-item-action">Galinha de borracha</a>
<a href="#" className="list-group-item list-group-item-action">Bolinha</a>
<a href="#" className="list-group-item list-group-item-action">Comedouro</a>
<a href="#" className="list-group-item list-group-item-action" style={{ background: tema, color: 'white' }} >Ração</a>
<a href="#" className="list-group-item list-group-item-action">Escova</a>
<a href="#" className="list-group-item list-group-item-action">Shampoo</a>
</div>
</div>
</div>
);
}

export default ListaProdutos;