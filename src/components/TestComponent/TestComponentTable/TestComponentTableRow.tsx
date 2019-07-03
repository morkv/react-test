import * as React from 'react';
import moment from 'moment';
import { 
  Table
} from 'semantic-ui-react';
import './TestComponentTableRow.css'

function TestComponentTableRow(props:any) {
    let { row } = props;
    function getWhenAdded() {
        let date = moment(row.addedOn, "DD/MM/YYYY");

        return date.calendar().split(' ')[0]
    }
    return (
        <Table.Row>
            <Table.Cell>{getWhenAdded()}</Table.Cell>
            <Table.Cell className={`custom custom--${row.extension}`}><span>{`${row.filename}.${row.extension}`}</span></Table.Cell>
        </Table.Row>
    )
};

export default TestComponentTableRow;
