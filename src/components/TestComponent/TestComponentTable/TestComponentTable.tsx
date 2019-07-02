import * as React from 'react';
import uuid from 'uuid';
import { 
  Table
} from 'semantic-ui-react';

import TestComponentTableRow from './TestComponentTableRow';

function TestComponentTable({rows}) {
    return (
        <Table basic='very' className='table--custom'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Added on</Table.HeaderCell>
                    <Table.HeaderCell>Recent documents</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {rows.documents.map(row => <TestComponentTableRow row={row} key={uuid()}/>)}
            </Table.Body>
        </Table>
    );
};

export default TestComponentTable;
