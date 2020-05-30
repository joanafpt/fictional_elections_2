import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
const envelope = <FontAwesomeIcon icon={faEnvelopeOpen}  size='2x'  />

class Envelope extends React.Component {
    render() {
        return (
            <div id="envelope">
               {envelope}               
            </div>
        )
    }
}

export default Envelope;