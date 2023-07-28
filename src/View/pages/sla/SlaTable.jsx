import React, { useMemo } from 'react';
import './slaTable.scss';

function SlaTable() {

    // const data = useMemo(() => mockData, [])
    // console.log(data)
  return (
    <div className='sla-table-wrapper'>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Services Associated</th>
                    <th>SLA</th>
                </tr>
            </thead>
            <tbody>
                <>
                    <tr>
                        <td className='table-data' rowSpan={8}>Request ICT Working Tool</td>
                        <td className='table-data'>Request for Laptop</td>
                        <td className='table-data'>4 weeks</td>
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
                        <td className='table-data' rowSpan={7}>Core Business Application Services \ eClinic \ EMR</td>
                        <td className='table-data'>Request for new Enpower/IBS user </td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for priviledge change (IBS/Enpower)</td>
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
                        <td className='table-data'>Request for Collection Processor User Creation</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                    <tr>
                        {/* <td className='table-data'></td> */}
                        <td className='table-data'>Request for priviledge change (Collection Processor)</td>
                        <td className='table-data'>24Hrs</td>
                    </tr>
                </>
                <>
                    <tr>
                        <td className='table-data' rowSpan={4}>Messaging & Collaboration</td>
                        <td className='table-data'>Email box Creation</td>
                        <td className='table-data'>24Hrs</td>
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