import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const phone = <FontAwesomeIcon icon={faPhone}  size='2x'  />

 class Phone extends React.Component {
    render() {
        return (
            <div>
                {phone}
            </div>
        )
    }
}

export default Phone;
