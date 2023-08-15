import React, { useMemo, useState } from 'react';
import './slaTable.scss';
import { Link } from 'react-router-dom';
import { BadgeAlert, Tag, Unplug, X } from 'lucide-react';

function SlaTable() {

    const [showEdit, setShowEdit] = useState(false);

    const [editCategory, setEditCategory] = useState('')

    const handleEdit = (categoryId) => {
        setShowEdit(!showEdit)

    }

    // const data = useMemo(() => mockData, [])
    // console.log(data)
  return (
    <div className='sla-table-wrapper'>

        <div className={`editPanelWrapper ${showEdit ? "active" : "inactive"}`}>
            <div className="editPanelOverlay" onClick={() => setShowEdit(!showEdit)}></div>
            <div className="editPanelContainer">
                <div className="editCategory">
                    <div className="categoryLabel">
                        <span>Category</span>
                        <span><Tag size={13}/></span>
                    </div>
                    <div className="categoryText">
                        <select className = 'formSelect' onChange={(e)=> setEditCategory(e.target.value)} value={editCategory}>
                            <option value="Request ICT Working Tools">Request ICT Working Tools</option>
                            <option value="Core Business Application Services">Core Business Application Services</option>
                            <option value="Messaging & Collaboration">Messaging & Collaboration</option>
                            <option value="Domain Administration (AD)">Domain Administration (AD)</option>
                        </select>
                    </div>
                </div>
                <div className="editServices">
                    <div className="serviceLabel">
                        <span>Services</span>
                        <span><Unplug size={17}/></span>
                    </div>
                </div>
                <div className="servicePool">
                        <div className="servicePool-item"> Request for Laptop 
                            <span><X size={13}/></span>
                        </div>
                        <div className="servicePool-item"> Request for Desktop 
                            <span><X size={13}/></span>
                        </div>
                        <div className="servicePool-item"> Request for Printer 
                            <span><X size={13}/></span>
                        </div>
                        <div className="servicePool-item"> Request for UPS 
                            <span><X size={13}/></span>
                        </div>
                        <div className="servicePool-item"> Request for Collection Processor User Creation
                            <span><X size={13}/></span>
                        </div>
                        <div className="servicePool-item"> Email box Creation 
                            <span><X size={13}/></span>
                        </div>
                </div>


                <div className="uncategorized-label-wrapper">
                    <div className="uncategorizedLabel">
                        <span>Uncategorized</span>
                        <span><BadgeAlert size={17}/></span>
                    </div>
                </div>
                <div className="uncategorized">
                        <div className="uncategorized-item"> Request for Laptop 
                            <span><X size={13}/></span>
                        </div>
                        <div className="uncategorized-item"> Request for Desktop 
                            <span><X size={13}/></span>
                        </div>
                        <div className="uncategorized-item"> Request for Printer 
                            <span><X size={13}/></span>
                        </div>
                        <div className="uncategorized-item"> Request for UPS 
                            <span><X size={13}/></span>
                        </div>
                        <div className="uncategorized-item"> Request for Collection Processor User Creation
                            <span><X size={13}/></span>
                        </div>
                        <div className="uncategorized-item"> Email box Creation 
                            <span><X size={13}/></span>
                        </div>
                </div>
                <button>Save</button>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Services Associated</th>
                    <th>SLA</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <>
                    <tr>
                        <td className='table-data' rowSpan={8}>Request ICT Working Tool</td>
                        <td className='table-data'>Request for Laptop</td>
                        <td className='table-data'>4 weeks</td>
                        <td className='table-data' rowSpan={8}>
                            <div className='action-wrapper'>
                                <div className='action-edit' onClick={handleEdit}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                            <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                        </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Desktop</td>
                        <td className='table-data'>4 weeks</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Printer</td>
                        <td className='table-data'>4 weeks</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for UPS</td>
                        <td className='table-data'>5 Days</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Mouse</td>
                        <td className='table-data'>5 Days</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Keyboard</td>
                        <td className='table-data'>5 Days</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Internet Modem</td>
                        <td className='table-data'>5 Days</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Other Accessories (specify)</td>
                        <td className='table-data'>5 Days</td>
                    </tr>
                </>
                <>
                    <tr>
                        <td className='table-data' rowSpan={7}>Core Business Application Services</td>
                        <td className='table-data'>Request for New User Creation </td>
                        <td className='table-data'>24Hrs</td>
                        <td className='table-data' rowSpan={7}>
                            <div className='action-wrapper'>
                                <div className='action-edit' onClick={handleEdit}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                            <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                        </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for priviledge change</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Installation</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Access to Portals</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for CRM User Creation</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for User Creation</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Priviledge change</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                </>
                <>
                    <tr>
                        <td className='table-data' rowSpan={4}>Messaging & Collaboration</td>
                        <td className='table-data'>Email box Creation</td>
                        <td className='table-data'>24Hrs</td>
                        <td className='table-data' rowSpan={4}>
                            <div className='action-wrapper'>
                                <div className='action-edit' onClick={handleEdit}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                            <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                        </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request a Email Box Expansion</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Email box deactivation</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Microsft Teams Meeting</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                </>
                <>
                    <tr>
                        <td className='table-data' rowSpan={3}>Domain Administration (AD)</td>
                        <td className='table-data'>Request for Domain User Creation</td>
                        <td className='table-data'>24Hrs</td>
                        <td className='table-data' rowSpan={3}>
                            <div className='action-wrapper'>
                                <div className='action-edit' onClick={handleEdit}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                            <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                        </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for Domain User Deactivation</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for priviledge change (AD)</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                </>
            </tbody>
            {/* <tfoot>
                <tr>
                    <td>ID</td>
                </tr>
            </tfoot> */}
        </table>
    </div>
  )
}

export default SlaTable