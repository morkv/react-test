import moment from 'moment';
import { GET_ITEMS } from '../actions/types';
const initialState = {
    cases: [
        {
            case_name: 'O.J Simpson vs The People', 
            documents: [
                { 
                    filename: 'Exhibit R-2', 
                    addedOn: moment().format("DD/MM/YYYY"), 
                    extension:'pdf'
                },
                { 
                    filename: 'Exhibit R-3', 
                    addedOn: moment().format("DD/MM/YYYY"), 
                    extension: "pdf"
                },
                { 
                    filename: 'Draft Letter to the Prosecutor', 
                    addedOn: moment().subtract(1, "days").format("DD/MM/YYYY"), 
                    extension: 'docx'
                }
            ],
            deadlines: [
                {
                    date: 'deadlines_date'
                }
            ]
        },
        {
            case_name: 'Hillary Clinton vs Donald Trump', 
            documents: [{ 
                filename: 'Draft Letter to the Prosecutor', 
                addedOn: moment().subtract(1, "days").format("DD/MM/YYYY"), 
                extension: 'docx'
            }],
            deadlines: [{date: 'deadlines_date'}, {date: 'deadlines_date'}]
        },
        {
            case_name: 'Predator vs Alien', 
            documents: [],
            deadlines: [{date: 'deadlines_date'}]
        }
    ],
};

export default function(state = initialState, action: {type: string}) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        default:
            return state;
    };
};