import * as React from 'react';
import moment from 'moment';
import { 
    List,
    Label
  } from 'semantic-ui-react';

function TestComponentTList({lists}) {

    function getTodayDocumentsCount() {
        let addedToday = []
        lists.documents.map(el => {
            let date = moment(el.addedOn, "DD/MM/YYYY");
            // moment().diff(date, 'days') > 0 && console.log(date.calendar().split(' ')[0])
            moment().diff(date, 'days') == 0 && addedToday.push(el.addedOn)
        })
        return addedToday.length
    }


    function getDeadlinesCount() {
        return lists.deadlines.length
    }

    return (
        <List horizontal>
            <List.Item>
                Documents added today:<Label className='label--custom'>{getTodayDocumentsCount()}</Label>
            </List.Item>
            <List.Item>
                Uncoming deadlines:<Label className='label--custom'>{getDeadlinesCount()}</Label>
            </List.Item>
        </List>
    )
};

export default TestComponentTList;