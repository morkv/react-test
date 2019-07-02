import * as React from 'react';
import { 
  Table
} from 'semantic-ui-react';

import TestComponentTableRow from './TestComponentTableRow';

function TestComponentTable({cases}) {
    return (
        <Table basic='very' className='table--custom'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Added on</Table.HeaderCell>
                    <Table.HeaderCell>Recent documents</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {cases.map(({documents}) => {
                   return (
                    documents.map(el => {
                        return (
                            <TestComponentTableRow row={el} key={el.addedOn}/>
                        )
                    })
                   )
                })}
            </Table.Body>
        </Table>
    );
};

export default TestComponentTable;
