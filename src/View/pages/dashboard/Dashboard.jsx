import React from 'react'
import './dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faHospital } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import AddButton from '../../components/addButton/AddButton';
import NavBar from '../../components/navigation/NavBar';
import { useState, useEffect } from 'react';
import Skeleton from '../../components/skeleton/Skeleton';

const Dashboard = ({loading, count, countStatus}) => {

    const [greet, setGreet] = useState('');
    // const [count, setCount] = useState([]);
    // const [countStatus, setCountStatus] = useState([]);
    console.log("Count", countStatus)
    const handleGreet = () => {
        let today = new Date()
        let getCurrentHour = today.getHours() 

        if (getCurrentHour < 12) {
            setGreet("Good Morning");
        }
        else if (getCurrentHour < 18) {
            setGreet("Good Afternoon");
        }
        else {
            setGreet("Good Evening");
        }
    }

    useEffect(() => {
        handleGreet();
    }, [])
    
    
  return (
    <div className='dashboard-container'>
        <NavBar />
        <AddButton />
        {/* Dashboard */}
        <div className='dashboard-header'>
            <div className="greetings">
                Hi <span className="wave">👋</span> {greet}!
            </div>        
        </div>

        <div className="stats">
            <div className="facilityStats ikejaJones">
                <div className="facility ikejaJones">
                    Ikeja - Adeniyi Jones
                </div>
                <div className="cases">
                    <div className="icon ikejaJones">
                        <FontAwesomeIcon icon={faHospital}/>
                    </div>
                    <div className="figures">
                        <span>
                            <CountUp end={3} duration={2}/>
                        </span>
                        <span>Cases</span>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        <div>
                            {loading && <p>...</p>}
                            {<p>countStatus[1].open</p>}
                        </div>
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        {/* <div>{countStatus[1].closed}</div> */}
                    </div>
                </div>
            </div>

            <div className="facilityStats ikejaAwolowo">
                <div className="facility ikejaAwolowo">
                    Ikeja - Awolowo
                </div>
                <div className="cases">
                    <div className="icon ikejaAwolowo">
                        <FontAwesomeIcon icon={faHospital}/>
                    </div>
                    <div className="figures">
                        <span>
                            <CountUp end={51} duration={2}/>
                        </span>
                        <span>Cases</span>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        {/* <div>{countStatus[0].open}</div> */}
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        {/* <div>{countStatus[0].closed}</div> */}
                    </div>
                </div>
            </div>

            <div className="facilityStats idejo">
                <div className="facility idejo">
                    Idejo
                </div>
                <div className="cases">                    
                    <div className="icon idejo">
                        <FontAwesomeIcon icon={faHospital}/>
                    </div>
                    <div className="figures">
                        <span>
                            <CountUp end={30} duration={2}/>
                        </span>
                        <span>
                            Cases
                        </span>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        {/* <div>{countStatus[3].open}</div> */}
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        {/* <div>{countStatus[3].closed}</div> */}
                    </div>
                </div>
            </div>

            <div className="facilityStats lss">
                <div className="facility lss">
                    LSS
                </div>
                <div className="cases">                    
                    <div className="icon lss">
                        <FontAwesomeIcon icon={faHospital}/>
                    </div>
                    <div className="figures">
                        <span>
                            <CountUp end={30} duration={2}/>
                        </span>
                        <span>
                            Cases
                        </span>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        {/* <div>{countStatus[4].open}</div> */}
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        {/* <div>{countStatus[4].closed}</div> */}
                    </div>
                </div>
            </div>

            <div className="facilityStats fabac">
                <div className="facility fabac">
                    FABAC
                </div>
                <div className="cases">
                    <div className="icon fabac">
                        <FontAwesomeIcon icon={faHospital}/>
                    </div>
                    <div className="figures">
                        <span>
                            <CountUp end={55} duration={2}/>
                        </span>
                        <span>Cases</span>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        {/* <div>{countStatus[5].open}</div> */}
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        {/* <div>{countStatus[5].closed}</div> */}
                    </div>
                </div>
            </div>
            <div className="facilityStats ikoyi">
                <div className="facility ikoyi">
                    Ikoyi
                </div>
                <div className="cases">
                    <div className="icon ikoyi">
                        <FontAwesomeIcon icon={faHospital}/>
                    </div>
                    <div className="figures">
                        <span>
                            <CountUp end={69} duration={2}/>
                        </span>
                        <span>Cases</span>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        {/* <div>{countStatus[2].open}</div> */}
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        {/* <div>{countStatus[2].closed}</div> */}
                    </div>
                </div>
            </div>
            <div className="facilityStats total">
                <div className="facility total">
                    Total
                </div>
                <div className="cases">
                    <div className="icon total">
                        <FontAwesomeIcon icon={faChartSimple}/>
                    </div>
                    <div className="figures">
                        <span>
                            <CountUp end={247} duration={2}/>
                        </span>
                        <span>Cases</span>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        <div>62</div>
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        <div>185</div>
                    </div>
                </div>
            </div>
            <Skeleton type="feed"/>
        </div>

        {/* <AddButton /> */}
    </div>
  )
}

export default Dashboard