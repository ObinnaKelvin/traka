import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddButton from '../../components/addButton/AddButton'
import NavBar from '../../components/navigation/NavBar'
import './team.css'
import levelOne from '../../assets/images/levelOne.png'
import levelTwo from '../../assets/images/levelTwo.png'

const Team = () => {
  return (
    <div className='team-container'>
        <AddButton />
        <NavBar />
        <div className='team-header'>Team</div>
        <div className="team-wrapper">
                <div className='team-level'>Level 1 <img class="level" src={levelOne} alt='single badge'/></div>
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
                            Uchechi Ezeh-Moses
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 903 960 1114</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Ikeja Clinic</span>
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
                            Damilola Ayodele
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 810 904 0334</span>
                        </div>
                        <div className='team-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Idejo</span>
                        </div>
                        <div className='team-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                {/* <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Arthur Idorenyin
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
                </div> */}
                <div className="team-member">
                    <div className="team-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="team-member-rank"></div>
                        </span>
                    </div>
                    <div className="team-member-details">
                        <div className='team-member-name'>
                            Ayotola Awosika
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 703  463  3132</span>
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
                            Ekene Okoli
                        </div>
                        <div className='team-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span>+234 808  992  5040</span>
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
            </div>
            <div className='team-level'>Level 2 <img class="level" src={levelTwo} alt='single badge'/> <img class="level" src={levelTwo} alt='single badge'/></div>
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