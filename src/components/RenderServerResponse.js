import React from 'react';
import './RenderServerResponse.css';
import Graph from '../graph/Graph';
import Navbar from './Navbar';


class RenderServerResponse extends React.Component {
    refreshPageToCheckVotes = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <div className="container" id="container">
                <Navbar />
                <div id="outer-div">
                    <div className="row">
                        <div className="col-md" id="graph-and-text">
                            <div className="info-graph">
                                <Graph />
                                <div className="ty"> <p>A informação patente no gráfico é atualizada automaticamente de 5 em 5 minutos.
                                Caso pretenda atualizar a informação disponível no site a qualquer momento, clique em Atualizar.
                              </p></div>

                                <div className="row align-items-center justify-content-center"
                                    id="refr-button">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={this.refreshPageToCheckVotes}>
                                        Atualizar
                                        </button>
                                </div>

                            </div>
                        </div>

                        <div className="col-md" >
                            <div className="dummytext">

                                <div id="metodologia">
                                    <h3>Metodologia de análise</h3>

                                    <p> A análise estatística foi efetuada atendendo aos mais altos padrões de qualidade
                                referenciados a nível internacional.</p>
                                    <p> Den statistiske analysen ble utført i samsvar med de høyeste kvalitetsstandarder
                                    internasjonalt referert. A análise estatística realizouse cumprindo os máis altos estándares de calidade
                                referenciado internacionalmente.</p>
                                    <p> Den statistiske analysen ble utført i samsvar med de høyeste kvalitetsstandarder
                                    internasjonalt referert. A análise estatística realizouse cumprindo os máis altos estándares de calidade
                                referenciado internacionalmente.</p>
                                </div>
                                <div id="recolha">
                                    <h3> Recolha e Registo</h3>
                                    <p> Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md">
                            <div className="dummytext">

                                <div id="trat">
                                    <h3> Tratamento de dados</h3>
                                    <p> A análise estatística foi efetuada atendendo aos mais altos padrões de qualidade
                                        referenciados a nível internacional.</p>
                                    <p> Den statistiske analysen ble utført i samsvar med de høyeste kvalitetsstandarder
                                    internasjonalt referert. A análise estatística realizouse cumprindo os máis altos estándares de calidade
                                    referenciado internacionalmente.</p>
                                    <p> Den statistiske analysen ble utført i samsvar med de høyeste kvalitetsstandarder
                                    internasjonalt referert. A análise estatística realizouse cumprindo os máis altos estándares de calidade
                                        referenciado internacionalmente.</p>
                                </div>
                                <div id="obs">
                                    <h3> Observações</h3>
                                    <p> Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting.</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md" >
                            <div className="dummytext">
                                <div id="conc">
                                    <h3> Conclusões</h3>
                                    <p> A análise estatística foi efetuada atendendo aos mais altos padrões de qualidade
                                    referenciados a nível internacional.</p>
                                    <p> Den statistiske analysen ble utført i samsvar med de høyeste kvalitetsstandarder
                                    internasjonalt referert. A análise estatística realizouse cumprindo os máis altos estándares de calidade
                                    referenciado internacionalmente.</p>
                                    <p> Den statistiske analysen ble utført i samsvar med de høyeste kvalitetsstandarder
                                    internasjonalt referert. A análise estatística realizouse cumprindo os máis altos estándares de calidade
                                    referenciado internacionalmente.</p>
                                </div>
                                <div id="hipo">
                                    <h3>Hipóteses futuras</h3>
                                    <p> Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default RenderServerResponse;


