import React from 'react';
import './ContactUs.css';
import Envelope from './Envelope';
import At from './At';
import Phone from './Phone';

class ContactUs extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center col-12" /*id="ecra6"*/>
                <div className="container" id="contact-container">
                    <div className="row">
                        <div className="col-sm" id="telephone-mail-address">
                            <div id="frame">
                                <div className="col-sm" id="env"><Envelope /> </div>
                                <div className="col-sm">Morada : Rua 3945, 1.º Esq., 9000-000  </div>
                                <div className="col-sm" id="at"><At /></div>
                                <div className="col-sm">E-mail : geral@cssa.com.pt.net.org</div>
                                <div className="col-sm" id="phone"><Phone /></div>
                                <div className="col-sm">Telefone : +351 000 000 000 </div>
                            </div>
                        </div>
                        <div className="col-sm" id="conversa">
                            <div id="text-contact" className="col-sm">
                                <h3>Contacte-nos!</h3>
                                <p><strong>Dê sugestões.</strong></p>
                                <p><strong>Queremos saber a sua opinião.</strong></p>
                                O Centro de Sondagens está ao dispor para o esclarecimento de
                                qualquer questão relacionada com a metodologia utilizada,
                                 as amostras, a recolha e tratamento
                                de dados, entre outros.
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactUs;