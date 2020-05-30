import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        // console.log( window.location);
        // console.log( window.location.href);
        // console.log( typeof(window.location.href));
        //  console.log(window.location.href.substr(0, 21));
        let currentHost = window.location.href.substr(0, 21);
        // console.log(currentHost);

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="bar">
                    <a className="navbar-brand" href={currentHost}>Bem-vindos/as!</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href='/initialmenu'>Início<span className="sr-only">(current)</span></a>
                              {/*   <a className="nav-link" href={`${currentHost}`, 'initialmenu'}>Início<span className="sr-only">(current)</span></a>*/}
                           
                           
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#info-graph">Gráfico</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#metodologia">Metodologia de análise</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#recolha">Recolha e Registo</a>
                            </li>



                            <li className="nav-item">
                                <a className="nav-link" href="#trat">Tratamento de dados</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#obs">Observações</a>
                            </li>


                            <li className="nav-item dropdown">
                                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                    role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
        Outras informações</a> 
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href='/centro'>Centro de Sondagens de Santo Afonso</a>
                                   {/* <a className="dropdown-item" href={`${currentHost}`, 'centro'}>Centro de Sondagens de Santo Afonso</a> */}
                                    <a className="dropdown-item" href="/currentgeneralresults">Informações úteis</a>
                                    {/* <a className="dropdown-item" href={`${currentHost}`, "currentgeneralresults"}>Informações úteis</a> */}
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href= "/contactus">Contactos</a>
                                    {/*<a className="dropdown-item" href={`${currentHost}`, "contactus"}>Contactos</a> */}
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
