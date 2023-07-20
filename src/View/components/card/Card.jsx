import React from 'react';
import './card.scss';
import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AgentCard = () => {
    return(
        <div className="card-member">
            <div className="card-member-avatar">
                <span>
                    <FontAwesomeIcon icon={faUser}/>
                    <div className="card-member-rank"></div>
                </span>
            </div>
            <div className="card-member-details">
                <div className='card-member-name'>
                    Mary Bassey
                </div>
                <div className='card-member-phone'>
                    <span><FontAwesomeIcon icon={faPhone}/></span>
                    <span><a href='tel:'>+234 812 782 2787</a></span>
                </div>
                {/* <div className='card-member-facility'>
                    <span><FontAwesomeIcon icon={faLocationDot}/></span>
                    <span>Victoria Island - Idejo</span>
                </div> */}
                <div className='card-member-email'>
                    <span><FontAwesomeIcon icon={faEnvelope}/></span>
                    <span>itsupport@lagoonhospitals.com</span>
                </div>
            </div>
        </div>
    )
}