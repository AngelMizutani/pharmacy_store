import React, { Component } from 'react';

export default class AddProduct extends Component{
    render() {
        return (
            <div className="submit-form">
                <h1>Cadastrar produto</h1>
                <div className="form-group">
                    <label htmlFor="codigo">Código</label>
                    <input type="text"
                        className="form-control"
                        id="codigo"
                        required
                        name="codigo"
                    />
                </div>

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
                    <label htmlFor="fabricante">Fabricante</label>
                    <input type="text"
                        className="form-control"
                        id="fabricante"
                        required
                        name="fabricante"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="secao">Seção</label>
                    <input type="text"
                        className="form-control"
                        id="secao"
                        required
                        name="secao"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="valor_venda">Valor de Venda</label>
                    <input type="text"
                        className="form-control"
                        id="valor_venda"
                        required
                        name="valor_venda"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="qtde_estoque">Qtde. Estoque</label>
                    <input type="text"
                        className="form-control"
                        id="qtde_estoque"
                        required
                        name="qtde_estoque"
                    />
                </div>

                <button className="btn btn-success">
                    Cadastrar
                </button>
            </div>
        );
    }
}