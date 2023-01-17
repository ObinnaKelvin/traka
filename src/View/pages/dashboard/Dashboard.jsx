import React from 'react'
import './dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faHospital } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';

const Dashboard = () => {
  return (
    <div className='container'>
        Dashboard
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
                        <CountUp end={42} duration={2}/>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        <div>35</div>
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        <div>7</div>
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
                        <CountUp end={51} duration={2}/>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        <div>2</div>
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        <div>49</div>
                    </div>
                </div>
            </div>

            <div className="facilityStats victoriaIsland">
                <div className="facility victoriaIsland">
                    Victoria Island
                </div>
                <div className="cases">                    
                    <div className="icon victoriaIsland">
                        <FontAwesomeIcon icon={faHospital}/>
                    </div>
                    <div className="figures">
                        <CountUp end={30} duration={2}/>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        <div>2</div>
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        <div>28</div>
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
                        <CountUp end={55} duration={2}/>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        <div>11</div>
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        <div>44</div>
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
                        <CountUp end={69} duration={2}/>
                    </div>
                </div>
                <div className="status">
                    <div className="Open">
                        <div>Open</div>
                        <div>12</div>
                    </div>
                    <div className="Closed">
                        <div>Closed</div>
                        <div>57</div>
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
                        <CountUp end={247} duration={2}/>
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
        </div>
    </div>
  )
}

export default Dashboard