import React from 'react';
import './QuestionForm.css';
import functions from '../functions/functions';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            candidate: '', //dropdown
            date: new Date(),
            attemptToSubmit: false,
            outputMessage: '',
            msg: '',
            serverHasResponded: false 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.backInitial = this.backInitial.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        let selectedOption = document.getElementById("select1").value;
        this.setState({
            [event.target.name]: event.target.value,
            candidate: selectedOption
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        let objToSend = this.state;
        this.setState({
            attemptToSubmit: true,
        })
        functions.submitMyVote(objToSend, this.callback);
        if (!this.state.username || !this.state.password || !this.state.candidate) {
            this.setState({
                //  msg: '',
                attemptToSubmit: true,
                //   serverHasResponded: true
                serverHasResponded: false
            })
            return;
        }
    }

    callback = (data) => {
        this.setState({
            username: this.state.username,
            password: this.state.password,
            candidate: this.state.candidate,
            msg: data,
            attemptToSubmit: true,
            serverHasResponded: true,
        })
    }


    handleReset(event) {
        event.preventDefault(); //unabled 
        this.setState({
            username: '',
            password: '',
            candidate: '',
            msg: '', //unabled 
        })
    }

    backInitial(props) {
        console.log(JSON.stringify(this.props.history));
        this.props.history.push('/initialmenu');
    }

    render() {
        const { username, password, candidate } = this.state;
        return (
            <div>
                <div className="d-flex justify-content-center col-12"
                    id="ecra1"> 
                    <form>
                        <div className="form-group ">

                            <label
                                className="col text-center"
                                htmlFor="username"
                                name="username">Nome</label>

                            <input type="text"
                                className=" col-12"
                                id="username1"
                                name="username"
                                placeholder="Nome"
                                onChange={this.handleChange}
                                value={username} />
                            <small id="user-small"
                                className="form-text text-muted">Campo obrigatório</small>

                            <label
                                className="col text-center"
                                htmlFor="password"
                                name="password" >Código secreto</label>

                            <input type="password"
                                className=" col-12"
                                id="password1"
                                name="password"
                                placeholder="Código"
                                onChange={this.handleChange}
                                value={password} />
                            <small id="user-small2" className="form-text text-muted">Campo obrigatório</small>

                            <div className="form-group">
                                <label className="col text-center"
                                    htmlFor="candidate">Candidato</label><br />
                            {/* populated through api call instead? */}
                                <select id="select1"
                                    className=" col-12" onChange={this.handleChange}
                                    value={candidate}>
                                    <option value="Candidato">Candidato</option>
                                    <option value="Marília">Marília</option>
                                    <option value="Manel">Manel</option>
                                    <option value="Genoveva">Genoveva</option>
                                    <option value="Joaquim">Joaquim</option>
                                    <option value="Fonseca">Fonseca</option>
                                    <option value="Serafim">Serafim</option>
                                    <option value="Fernando">Fernando</option>
                                    <option value="Joaquina">Joaquina</option>
                                    <option value="Godofredo">Godofredo</option>
                                    <option value="Chico">Chico</option>
                                </select>

                                <small id="user-small2" className="form-text text-muted">Campo obrigatório</small>
                            </div>

                            <div className="row">
                                <div className="col text-center" >
                                    <button
                                        className="btn btn-primary"
                                        id="go-button"
                                        type="submit"
                                        onClick={this.handleSubmit}>Submeter
                                </button>

                                    <button
                                        className="btn btn-default"
                                        id="back-button"
                                        type="button"
                                        onClick={this.backInitial}
                                    >
                                        Voltar</button>

                                    <button
                                        className="btn btn-warning"
                                        id="reset-button"
                                        type="submit"
                                        onClick={this.handleReset}
                                    >
                                        Limpar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div id="display-message-bottom">                  
                    {
                        this.state.attemptToSubmit ?
                            this.state.serverHasResponded ?
                                <div id="success">{this.state.msg} </div>
                                :
                                <div>Por favor aguarde...</div>

                            : <div id="niente">{null} </div>
                    }
                </div>
            </div>
        )
    }
}
export default QuestionForm;



