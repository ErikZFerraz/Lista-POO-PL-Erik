import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./home.css";
import FormularioCadastroCliente from "./formularioCadastroCliente"; // Verifique se o caminho está correto
import './margin.css';
import ListaProdutos from "./listaProdutos";

export class Carrosel extends Component {
render() {
return (
<Carousel className='tamanho-imagem'>
<Carousel.Item>
<img
className="img1"
src="https://veterinariaanchieta.com.br/wp-content/uploads/2023/03/Cao-e-Gato-Outono.jpg"
alt="First slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="img2"
src="https://ciclovivo.com.br/wp-content/uploads/2016/10/cao_gato_inteligencia.jpg"
alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="img3"
src="https://conteudo.imguol.com.br/c/entretenimento/ed/2018/06/21/cachorro-e-gato-1529609817532_v2_900x506.jpg"
alt="Third slide"
/>
</Carousel.Item>
</Carousel>
);
}
}

export class Intro extends Component {
render() {
return (
<>
<div className="row row-cols-1 row-cols-md-2 g-4">
<div className="col">
<div className="card">
<div className="card-body">
<h5 className="card-title title-custom">Promoção 1</h5>
<p className="card-text">
Aproveite 15% de desconto em todos os brinquedos para pets!
</p>
</div>
</div>
</div>
<div className="col">
<div className="card">
<div className="card-body">
<h5 className="card-title title-custom">Promoção 2</h5>
<p className="card-text">
Compre um pacote de ração de 5kg e leve um acessório para seu pet!
Promoção válida até o final do mês.
</p>
</div>
</div>
</div>
<div className="col">
<div className="card">
<div className="card-body">
<h5 className="card-title title-custom">Promoção 3</h5>
<p className="card-text">
Banho e tosa com 20% de desconto para novos clientes.
</p>
</div>
</div>
</div>
<div className="col">
<div className="card">
<div className="card-body">
<h5 className="card-title title-custom">Promoção 4</h5>
<p className="card-text">
Desconto especial de 10% em todos os acessórios para pets.
</p>
</div>
</div>
</div>
</div>
<div className="row row-cols-1 row-cols-md-2 g-4">
<div className="col">
<div className="card">
<div className="card-body">
<h5 className="card-title title-custom">Cadastro de Novos Clientes</h5>
<p className="card-text">
Cadastre-se agora e ganhe descontos exclusivos em nossa loja!
</p>
<FormularioCadastroCliente tema="cor_do_tema" /> {/* Use o componente FormularioCadastroCliente */}
</div>
</div>
</div>
<div className="col">
<div className="card">
<div className="card-body">
<h5 className="card-title title-custom">Nossos Produtos</h5>
<p className="card-text">
Nossos Melhores Produtos com exclusivos na nossa loja!
</p>
<ListaProdutos tema="cor_do_tema" /> {/* Use o componente FormularioCadastroCliente */}
</div>
</div>
</div>
</div>
</>
);
}
}