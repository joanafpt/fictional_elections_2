import React from 'react';
import './CurrentGeneralResults.css';
//import axios from 'axios';
//import axiosRetry from 'axios-retry';
import functions from '../functions/functions';

class CurrentGeneralResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVotation: [],
            apiRequestWasDone: false,
            pleaseWait: 'Por favor aguarde...',
        };

    }

    componentDidMount() {
        functions.getResults(this.callbackGet);
        this.refresh();
    }
    
    callbackGet = (data) => {
        this.setState({
            currentVotation: data,
            apiRequestWasDone: true,
            resultsAreRendered: true
        })
    }


    refresh() {
        setInterval(function () {
            console.log("Hello");
            window.location.reload(false);
        }, 300000); //refresh de 5 em 5 mins
        //  }, 5000); //refresh de 5 em 5 segs, para teste 
    }

    render() {
        return (
            <div className="d-flex justify-content-center" >
                {this.state.apiRequestWasDone ?
                    <div id="flatlist">
                        {this.state.currentVotation.map(function (elem) {
                            return (
                                <div id="text-results" key={elem['Candidato']}>
                                    <ul>
                                        <strong>{'Candidato: '}</strong>  {elem['Candidato']}  <br />
                                        <strong>{'Número de votos: '}</strong>  {elem['Votação']} <br />
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    :
                    <div id="wait">{this.state.pleaseWait}</div>
                }

            </div>
        )
    }
}

export default CurrentGeneralResults;