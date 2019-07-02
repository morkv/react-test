// import uuid from 'uuid';
import { GET_ITEMS } from '../actions/types';

const initialState = {
    cases: [
        {
            case_name: 'case_name', 
            documents: [
                { 
                    filename: 'Exhibit R-2', 
                    addedOn: '12.11.2019', 
                    extension:'pdf'
                },
                { 
                    filename: 'Exhibit R-3', 
                    addedOn: '13.11.2019', 
                    extension: "pdf"
                },
                { 
                    filename: 'Exhibit R-4', 
                    addedOn: '14.11.2019', 
                    extension: "pdf"
                },
                { 
                    filename: 'Draft Letter to the Prosecutor', 
                    addedOn: '15.11.2019', 
                    extension: 'docx'
                }
            ],
            deadlines: [
                {
                    date: 'deadlines_date'
                }
            ]
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