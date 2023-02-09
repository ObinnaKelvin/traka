import React from 'react'
import './skeleton.css'

export default function Skeleton ({type}) {

    const StatsSkeleton = ( ) => {
            <div className="Skel-facilityStats">
                <div className="Skel-facility">
                    Ikeja - Adeniyi Jones
                </div>
                <div className="Skel-cases">
                    <div className="Skel-icon ikejaJones">
                        {/* <FontAwesomeIcon icon={faHospital}/> */}
                    </div>
                    <div className="Skel-figures">
                        <span>
                            {/* <CountUp end={3} duration={2}/> */}
                        </span>
                        {/* <span>Cases</span> */}
                    </div>
                </div>
                <div className="Skel-status">
                    <div className="Skel-Open">
                        
                    </div>
                    <div className="Skel-Closed">
                        <div>Closed</div>
                        {/* <div>{countStatus[1].closed}</div> */}
                    </div>
                </div>
            </div>
    } 
    
    return <StatsSkeleton />;
}
