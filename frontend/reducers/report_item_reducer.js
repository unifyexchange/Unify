import merge from "lodash/merge";
import {
  CREATE_REPORT,
  RECEIVE_REPORT_ITEM,
  IS_LOADING_REPORT,
  RECEIVE_REPORT_LIST,
  UPDATE_REPORT_STATUS,
  RECEIVE_METRICS,
  RECEIVE_MOST_SEARCHED
} from "../actions/report_action";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import update from 'immutability-helper';


const initialState = {
  isLoading: false,
  item: {},
  report: [],
  metrics: {},
  searched: {},
  totalPageCount: 0,
  totalPageCountCategories: 0,
};

const reportReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case IS_LOADING_REPORT:
      return { ...state, isLoading: false};
    case RECEIVE_REPORT_LIST:
      return { ...state, isLoading: false,
              totalPageCount: action.item.page.totalpage,  
              report: action.item.reports 
            };
    case UPDATE_REPORT_STATUS:
      const index = action.report.index;
      const status = action.report.report.status;
      return update(state, { 
        isLoading: {$set: false},
        report: { 
          [index]: {
            status: {$set: status},
            updated_at: {$set: action.report.updated_at}
          }
        }
      });      
    case CREATE_REPORT:
      return merge({}, state, action.items);
    case RECEIVE_METRICS:
      return { ...state, isLoading: false, metrics: action.metrics};
    case RECEIVE_MOST_SEARCHED:

      return { ...state, isLoading: false, 
        totalPageCountCategories: action.searches.page.totalpage,  
        searches: action.searches.listing.mostRecent
      };
    case RECEIVE_REPORT_ITEM:
      return { ...state, isLoading: false, item: action.item };
    default:
      return state;
  }
};

export default reportReducer;
