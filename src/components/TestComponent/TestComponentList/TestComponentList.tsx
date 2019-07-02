import * as React from 'react';
import { 
    List,
    Label
  } from 'semantic-ui-react';

function TestComponentTList({cases}) {
    let length;
    let length_2;

    cases.map(el => {
        length = el.documents.length
        length_2 = el.deadlines.length
    })
    
    return (
        <List horizontal>
            <List.Item>
                Documents added today:<Label className='label--custom'>{length}</Label>
            </List.Item>
            <List.Item>
                Uncoming deadlines:<Label className='label--custom'>{length_2}</Label>
            </List.Item>
        </List>
    )
};

export default TestComponentTList;