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
            case_name: 'Tramp vs Obama', 
            documents: [],
            deadlines: []
        }
    ]
        
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                // items: action.payload,
                // loading: false
            };
        // case ITEMS_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        default:
            return state;
    };
};