import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBug, faChartLine, faComments, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'; 
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <div className='navBar'>
        <div className="navBar-header">
            <div className="navBar-header-logo">
                traka
            </div>
            {/* <Hamburger /> */}
            <div className="hamburger" onClick={toggle}>
                <span className="hamOne"></span>
                <span className="hamTwo"></span>
                <span className="hamThree"></span>
            </div>
        </div>
        <div className={open ? 'navBar-sideBar open' : 'navBar-sideBar'}>
            <ul>
              <li>
                <Link className='link' to ="/dashboard">
                  <span><FontAwesomeIcon icon={faChartLine}/></span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/incidence">
                  <span><FontAwesomeIcon icon={faBug}/></span>
                  <span>Incidences</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/team">
                  <span><FontAwesomeIcon icon={faPeopleGroup}/></span>
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/chatbox">
                  <span><FontAwesomeIcon icon={faComments}/></span>
                  <span>Chatbox</span>
                </Link>
              </li>
              <li className='logout'>
                <Link className='link logout' to ="/">
                  <span><FontAwesomeIcon icon={faArrowRightFromBracket}/></span>
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar