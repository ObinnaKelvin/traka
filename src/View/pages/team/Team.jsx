import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddButton from '../../components/addButton/AddButton'
import NavBar from '../../components/navigation/NavBar'
import './team.css'

const Team = () => {
  return (
    <div className='team-container'>
        <AddButton />
        <NavBar />
        <p className='team-header'>Team</p>
        <div className="team-wrapper">
                <p>Level 1</p>
            <div className="team-group">
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Susan Abuo
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 812 683 5580</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikoyi</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Emeka Madumere
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 906 461 6468</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikoyi</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Mary Bassey
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 812 782 2787</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Victoria Island - Idejo</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Damilola Awosika
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 815 723 5673</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikeja - Awolowo</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Arthur
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 703  617  9851</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikeja - Adeniyi Jones</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
            </div>
                <p>Level 2</p>
            <div className="team-group">
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank-levelTwo"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Adeleke Adeyemo
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 808 536 3246</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Victoria Island</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>Adeleke.Adeyemo@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank-levelTwo"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Jire Odunmbaku-Maxwell
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 809 786 0864</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikoyi</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span> Jire.Odunmbaku@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank-levelTwo"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Kehinde Ogundeyi
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span></span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikoyi</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>Kehinde.Ogundeyi@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank-levelTwo"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Obinna Okere
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 703 585 8557</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikeja - Awolowo & Ikeja Adeniyi Jones</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>ObinnaOkere@iwosanhealth.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Team