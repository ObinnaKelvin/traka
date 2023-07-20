import React, { useMemo } from 'react';
// import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
// import { useTable } from 'react-table'
import './agentTable.scss';
import mockData from './mockData.json';
import { AgentCard } from '../../components/card/Card';

function AgentTable() {

    /*

    {

        "id":1,
        "first_name":"Simone",
        "last_name":"Doogood",
        "email":"sdoogood0@wunderground.com",
        "gender":"Female",
        "dob":"8/2/2022"

    }
    
    */

  const data = useMemo(() => mockData, [])
//   const data = () => mockData
  console.log(data)

  /** @type import('@tanstack/react-table').ColumnDef<any>*/

//   const columns = [
//     {
//         header: 'ID',
//         accessorkey: 'id',
//         footer: 'ID',
//     },
//     {
//         header: 'First Name',
//         accessorkey: 'first_name',
//         footer: 'First Name',
//     },
//     {
//         header: 'Last Name',
//         accessorkey: 'last_name',
//         footer: 'Last Name',
//     },
//     {
//         header: 'Email',
//         accessorkey: 'email',
//         footer: 'Email',
//     },
//     {
//         header: 'Gender',
//         accessorkey: 'gender',
//         footer: 'Gender',
//     },
//     {
//         header: 'Date of Birth',
//         accessorkey: 'dob',
//         footer: 'Date of Birth',
//     }
//   ]

  const columns = useMemo(() => [
    {
        header: 'ID',
        accessor: 'id',
        footer: 'ID',
    },
    {
        header: 'First Name',
        accessor: 'first_name',
        footer: 'First Name',
    },
    {
        header: 'Last Name',
        accessor: 'last_name',
        footer: 'Last Name',
    },
    {
        header: 'Email',
        accessor: 'email',
        footer: 'Email',
    },
    {
        header: 'Gender',
        accessor: 'gender',
        footer: 'Gender',
    },
    {
        header: 'Date of Birth',
        accessor: 'dob',
        footer: 'Date of Birth',
    }
  ])

//   const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})

// const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className='table-wrapper'>
        <table>
            <thead>
                <tr>
                    <th>Agent</th>
                    <th>Gender</th>
                    <th>Facility</th>
                    <th>Admin</th>
                    <th>Rank</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div><AgentCard /></div>
                    </td>
                    <td className='table-data'>Male</td>
                    <td className='table-data'>Ikeja</td>
                    <td className='table-data'>Admin</td>
                    <td className='table-data'>Level 1</td>
                    <td className='table-data'>
                        <div className='active-wrapper'>
                            <div className='active-sign'></div>
                            <div>Active</div>
                        </div>
                    </td>
                    <td className='table-data'>
                        <div className='action-wrapper'>
                            <div className='action-edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                    <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                </svg>
                            </div>
                            <div className='action-delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                                    <path className='agentdelete' d="M3 6h18"/><path className='agentdelete' d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path className='agentdelete' d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line className='agentdelete' x1="10" x2="10" y1="11" y2="17"/><line className='agentdelete' x1="14" x2="14" y1="11" y2="17"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div><AgentCard /></div>
                    </td>
                    <td className='table-data'>Male</td>
                    <td className='table-data'>Ikeja</td>
                    <td className='table-data'>Admin</td>
                    <td className='table-data'>Level 1</td>
                    <td className='table-data'>
                        <div className='active-wrapper'>
                            <div className='active-sign'></div>
                            <div>Active</div>
                        </div>
                    </td>
                    <td className='table-data'>
                        <div className='action-wrapper'>
                            <div className='action-edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                    <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                </svg>
                            </div>
                            <div className='action-delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                                    <path className='agentdelete' d="M3 6h18"/><path className='agentdelete' d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path className='agentdelete' d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line className='agentdelete' x1="10" x2="10" y1="11" y2="17"/><line className='agentdelete' x1="14" x2="14" y1="11" y2="17"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div><AgentCard /></div>
                    </td>
                    <td className='table-data'>Male</td>
                    <td className='table-data'>Ikeja</td>
                    <td className='table-data'>Admin</td>
                    <td className='table-data'>Level 1</td>
                    <td className='table-data'>
                        <div className='active-wrapper'>
                            <div className='active-sign'></div>
                            <div>Active</div>
                        </div>
                    </td>
                    <td className='table-data'>
                        <div className='action-wrapper'>
                            <div className='action-edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                    <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                </svg>
                            </div>
                            <div className='action-delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                                    <path className='agentdelete' d="M3 6h18"/><path className='agentdelete' d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path className='agentdelete' d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line className='agentdelete' x1="10" x2="10" y1="11" y2="17"/><line className='agentdelete' x1="14" x2="14" y1="11" y2="17"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div><AgentCard /></div>
                    </td>
                    <td className='table-data'>Male</td>
                    <td className='table-data'>Ikeja</td>
                    <td className='table-data'>Admin</td>
                    <td className='table-data'>Level 1</td>
                    <td className='table-data'>
                        <div className='active-wrapper'>
                            <div className='active-sign'></div>
                            <div>Active</div>
                        </div>
                    </td>
                    <td className='table-data'>
                        <div className='action-wrapper'>
                            <div className='action-edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                    <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                </svg>
                            </div>
                            <div className='action-delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                                    <path className='agentdelete' d="M3 6h18"/><path className='agentdelete' d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path className='agentdelete' d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line className='agentdelete' x1="10" x2="10" y1="11" y2="17"/><line className='agentdelete' x1="14" x2="14" y1="11" y2="17"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div><AgentCard /></div>
                    </td>
                    <td className='table-data'>Male</td>
                    <td className='table-data'>Ikeja</td>
                    <td className='table-data'>Admin</td>
                    <td className='table-data'>Level 1</td>
                    <td className='table-data'>
                        <div className='active-wrapper'>
                            <div className='active-sign'></div>
                            <div>Active</div>
                        </div>
                    </td>
                    <td className='table-data'>
                        <div className='action-wrapper'>
                            <div className='action-edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen">
                                    <path className='agentedit' d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                </svg>
                            </div>
                            <div className='action-delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                                    <path className='agentdelete' d="M3 6h18"/><path className='agentdelete' d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path className='agentdelete' d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line className='agentdelete' x1="10" x2="10" y1="11" y2="17"/><line className='agentdelete' x1="14" x2="14" y1="11" y2="17"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            {/* <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        { headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </th> 
                        ))}
                    </tr>
                ))}
            </thead> */}

            {/* <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    >
                    {header.isPlaceholder ? null : (
                        <div>
                        {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                        {
                            { asc: '🔼', desc: '🔽' }[
                            header.column.getIsSorted() ?? null
                            ]
                        }
                        </div>
                    )}
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                    </tr>
                ))}
            </tbody> */}
            {/* <tbody>
                {
                    table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))
                }
                <tr>
                    <td>1</td>
                </tr>
            </tbody> */}
            {/* <tfoot>
                <tr>
                    <td>ID</td>
                </tr>
            </tfoot> */}
        </table>
    </div>
  )
}

export default AgentTable