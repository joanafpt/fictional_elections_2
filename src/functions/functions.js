import axios from 'axios';
import axiosRetry from 'axios-retry';

const teste = () => {
    alert('estou acessível');
}


const submitMyVote = (objToSend, callback) => {
    console.log("entrei aqui");
    const postUrl = 'https://simulador.glitch.me/api/database/add';
    axiosRetry(axios, { retries: 5 });
    axios.post(postUrl, objToSend)
        .then(response => {
            console.log(response.data, ' response.data');
                if(callback) {
                callback(response.data);
            }
        })
        .catch(error => {
            console.log(error);
            axios.post(postUrl, objToSend)
            .then(response => {
                console.log(response.data, ' response.data');
                    if(callback) {
                    callback(response.data);
                }
            })
        })     
}

const getResults = (callbackGet) => {
    console.log("ola");
    const url = 'https://simulador.glitch.me/api/database/get-results?';
    axiosRetry(axios, { retries: 5 });
    axios.get(url)
        .then(response => {
            // console.log(response.data); 
            if (callbackGet) {
                callbackGet(response.data);
            }
        })
        .catch(error => {
            console.log(error);
            //lidar c erro aqui
            axios.get(url)
            .then(response => {
                // console.log(response.data); 
                if (callbackGet) {
                    callbackGet(response.data);
                }
            })
        })

}




const functions = {
    submitMyVote: submitMyVote,
    teste: teste,
    getResults: getResults,
}

export default functions;