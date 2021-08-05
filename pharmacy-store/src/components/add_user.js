import React, { Component } from 'react';

export default class AddUser extends Component {
    render(){
        return (
            <div className="submit-form">
                <h1>Cadastrar usuario</h1>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        className="form-control"
                        id="nome"
                        required
                        name="nome"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text"
                        className="form-control"
                        id="cpf"
                        required
                        name="cpf"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cargo">Cargo</label>
                    <input type="text"
                        className="form-control"
                        id="cargo"
                        required
                        name="cargo"
                    />
                </div>

                <button className="btn btn-success">
                    Cadastrar
                </button>
            </div>
            
        );
    }
}