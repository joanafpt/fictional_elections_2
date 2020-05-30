import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
const at = <FontAwesomeIcon icon={faAt} size='2x' />

class At extends React.Component {
    render() {
        return (
            <div>
                {at}
            </div>
        )
    }
}

export default At;
