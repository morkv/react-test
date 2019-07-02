import * as React from 'react';
import { 
  Table
} from 'semantic-ui-react';
import './TestComponentTableRow.css'

function TestComponentTableRow({row}) {
    return (
        <Table.Row>
            <Table.Cell>{row.addedOn}</Table.Cell>
            <Table.Cell className={`custom custom--${row.extension}`}><span>{`${row.filename}.${row.extension}`}</span></Table.Cell>
        </Table.Row>
    )
};

export default TestComponentTableRow;
