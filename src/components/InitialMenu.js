import React from 'react';
import './InitialMenu.css';
import { Link } from 'react-router-dom';

class InitialMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.goToTheForm = this.goToTheForm.bind(this);
        this.goToTheGraph = this.goToTheGraph.bind(this);
        this.goToTheInfo = this.goToTheInfo.bind(this);
        this.goToContacts = this.goToContacts.bind(this);
    }

    /*NAVIGATION  */

    goToTheForm() {
      //  console.log(JSON.stringify(this.props.history));
        this.props.history.push('/questionform');
    }

    goToTheGraph() {
      //  console.log(JSON.stringify(this.props.history));
        this.props.history.push('/renderserviceresponse');
    }
    goToTheInfo() {
      //  console.log(JSON.stringify(this.props.history));
        this.props.history.push('/currentgeneralresults');
    }

    goToContacts() {
        this.props.history.push('/contactus');
    }

    goToMessage = () => {
        this.props.history.push('/presidentmessage');
    }

    goToCentro = () => {
        this.props.history.push('/centro');
    }

    render() {
        return (
            <div className="container" id="cont">
                <h1>O que pretende fazer?</h1>
                <div className="row">
                    <div className="col-sm" id="vote">
                        <div className="row align-items-center justify-content-center">
                            <p> <Link to={"/questionform"}
                                activeclassname="active"> Submeter </Link> o meu voto. </p>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <button
                                className="btn btn-dark"
                                onClick={this.goToTheForm}>Formulário</button>
                        </div>
                    </div>

                    <div className="col-sm" id="gr">
                        <div className="row align-items-center justify-content-center">
                            <p> <Link to={"/renderserviceresponse"} activeclassname="active"> Visualizar </Link> o gráfico atual.</p>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <button className="btn btn-dark"
                                onClick={this.goToTheGraph}>Gráfico</button>
                        </div>
                    </div>

                    <div className="col-sm" id="info">
                        <div className="row align-items-center justify-content-center">
                            <p>  <Link to={"/currentgeneralresults"} activeclassname="active"> Visualizar </Link> informação da votação.</p>
                        </div>

                        <div className="row align-items-center justify-content-center">
                            <button className="btn btn-dark"
                                onClick={this.goToTheInfo}>Dados</button>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-sm" id="contact">
                        <div className="row align-items-center justify-content-center">
                            <p> <Link to={"/contactus"}
                                activeclassname="active"> Encontrar </Link> os contactos do Centro. </p>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <button
                                className="btn btn-dark"
                                onClick={this.goToContacts}>Contactos</button>
                        </div>
                    </div>

                    <div className="col-sm" id="president-msg">
                        <div className="row align-items-center justify-content-center">
                            <p> <Link to={"/presidentmessage"}
                                activeclassname="active"> Mensagem </Link> do Presidente. </p>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <button
                                className="btn btn-dark"
                                onClick={this.goToMessage}>Mensagem</button>
                        </div>
                    </div>

                    <div className="col-sm" id="centro">
                        <div className="row align-items-center justify-content-center">
                            <p>A nossa <Link to={"/centro"}
                                activeclassname="active">História</Link>. </p>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <button
                                className="btn btn-dark"
                                onClick={this.goToCentro}>O Centro</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InitialMenu;