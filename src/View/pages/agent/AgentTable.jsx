import React, { useMemo } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import mockData from './mockData.json'

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

  const columns = [
    {
        header: 'ID',
        accessorkey: 'id',
        footer: 'ID',
    },
    {
        header: 'First Name',
        accessorkey: 'first_name',
        footer: 'First Name',
    },
    {
        header: 'Last Name',
        accessorkey: 'last_name',
        footer: 'Last Name',
    },
    {
        header: 'Email',
        accessorkey: 'email',
        footer: 'Email',
    },
    {
        header: 'Gender',
        accessorkey: 'gender',
        footer: 'Gender',
    },
    {
        header: 'Date of Birth',
        accessorkey: 'dob',
        footer: 'Date of Birth',
    }
  ]

  const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})

  return (
    <div>
        <table>
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

            <thead>
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
            </tbody>
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