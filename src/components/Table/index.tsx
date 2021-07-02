import {  TableInstance} from 'react-table'

import * as style from './styles';


function Table<T extends Object>({instance}: { instance: TableInstance<T> }) {



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = instance;



    return (
        <style.TableWrapper cellPadding={0} cellSpacing={0} {...getTableProps} >
            <style.Heading>
                {
                    headerGroups.map(headerGroup => (

                        <style.HeadingRow {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <style.HeadingCell {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </style.HeadingCell>
                                ))
                            }
                        </style.HeadingRow>

                    ))
                }
            </style.Heading>
            <style.Body {...getTableBodyProps}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <style.BodyRow {...row.getRowProps}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <style.BodyCell {...cell.getCellProps}>
                                                {cell.render('Cell')}
                                            </style.BodyCell>
                                        )
                                    })
                                }
                            </style.BodyRow>
                        )
                    })
                }
            </style.Body>
        </style.TableWrapper>
    )

}

export default Table;