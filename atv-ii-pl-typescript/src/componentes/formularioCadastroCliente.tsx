import React, { Component } from 'react';
import './margin.css';

type Props = {
  tema: string;
};

export default class FormularioCadastroCliente extends Component<Props> {
  render() {
    const { tema } = this.props;
    return (
      <div className="container-fluid">
        <form>
          <div className="margin-lista">
            <h2 style={{ textAlign: 'center' }}>Cadastro de clientes</h2>
          </div>
          <div className="margin-lista">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                aria-label="Nome"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome social"
                aria-label="Nome social"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="CPF"
                aria-label="CPF"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1" style={{ background: tema, color: 'white' }}>
                dd/mm/yyyy
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Data de emissão do CPF"
                aria-label="Data de emissão do CPF"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="RG"
                aria-label="RG"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1" style={{ background: tema, color: 'white' }}>
                dd/mm/yyyy
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Data de emissão do RG"
                aria-label="Data de emissão do RG"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1" style={{ background: tema, color: 'white' }}>
                DDD
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Telefone"
                aria-label="Telefone"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Telefone"
                aria-label="Telefone"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome do Pet"
                aria-label="Nome do Pet"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tipo do Pet"
                aria-label="Tipo do Pet"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Raça do Pet"
                aria-label="Raça do Pet"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Gênero do Pet"
                aria-label="Gênero do Pet"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary" type="button" style={{ background: tema, color: 'white' }}>
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
