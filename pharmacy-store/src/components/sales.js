import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class Sales extends Component {
    render() {
        return (
            <div class="mb-3">
                <div>
                    <div className="list-row">
                        <label htmlFor="cod_prod" className="form-label">Código</label>
                        <input
                            type="text"
                            id="cod_prod"
                            name="cod_prod"
                            className="form-control"
                        />
                    </div>

                    <div className="list-row" >
                        <label htmlFor="nome_prod" className="form-label">Produto</label>
                        <input
                            type="text"
                            id="nome_prod"
                            name="nome_prod"
                            className="form-control"
                        />
                    </div>

                    <div className="list-row" >
                        <label htmlFor="fabricante" className="form-label">Fabricante</label>
                        <input
                            type="text"
                            id="fabricante"
                            name="fabricante"
                            className="form-control"
                        />
                    </div>


                    <div className="row">
                        <div className="list-row col-md-4" >
                            <label htmlFor="qtde" className="form-label">Qtde</label>
                            <input
                                type="text"
                                id="qtde"
                                name="qtde"
                                className="form-control"
                            /> 
                        </div>

                        <div className="list-row col-md-4">
                            <label htmlFor="valor" className="form-label">Valor</label>
                            <input
                                type="text"
                                id="valor"
                                name="valor"
                                className="form-control"
                            /> 
                        </div>

                        <div className="list-row col-md-4">
                            <label htmlFor="subtotal" className="form-label">Sub-total</label>
                            <input
                                type="text"
                                id="subtotal"
                                name="subtotal"
                                className="form-control"
                            /> 
                        </div>

                    </div>

                    <div className="button" >
                        <button className="btn btn-success">
                            Adicionar
                        </button>
                    </div>
                    
                </div>
                
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Qtde</th>
                                <th>P. Unit.</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Paracetamol comprimidos c/ 20</td>
                                <td>2</td>
                                <td>5.50</td>
                                <td>11.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="total">
                    <label htmlFor="total" >
                        Total
                        <input type="text"
                            id="total"
                            name="total"
                            style={{marginLeft: 10}}
                        />
                    </label>
                    
                </div>
                    
            </div>
        );
    }
}