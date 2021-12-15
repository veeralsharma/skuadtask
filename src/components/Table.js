import React from 'react'

function Table({columnData, rowData}) {
    console.log(columnData, rowData);
    return (
        <table className="table">
            <tbody className="table__body">
                <tr className="table-row">
                    {columnData.map(({label}, i) => (
                        <th className="table-row__header" key={i}>
                            {label}
                        </th>
                    ))}
                </tr>
                <div className="table-data">
                {rowData.map((row, i ) => (
                    <tr className="table-row" key={i}>
                        {columnData.map((column, i ) => (
                            <td className="table-row__data" key={i}>
                                {
                                    column.itemRenderer 
                                    ? column.itemRenderer(row[column.name], row, i)
                                    : row[column.name]
                                }
                            </td>
                        ))}
                    </tr>
                ))}
                </div>
            </tbody>
        </table>
    )
}

export default Table
