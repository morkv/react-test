import * as React from 'react';
import uuid from 'uuid';
import { 
  Table
} from 'semantic-ui-react';

import TestComponentTableRow from './TestComponentTableRow';
const DOCUMENTS_COUNT = 3;

function TestComponentTable(props: any) {
    let { rows } = props;

    function documentsCount() {
        if(rows.documents.length >= DOCUMENTS_COUNT) {
            return DOCUMENTS_COUNT
        }
    }

    return (
        <Table basic='very' className='table--custom'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Added on</Table.HeaderCell>
                    <Table.HeaderCell>Recent documents</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {[...rows.documents].slice(0, documentsCount()).map((row:any) => <TestComponentTableRow row={row} key={uuid()}/>)}
            </Table.Body>
        </Table>
    );
};

export default TestComponentTable;
