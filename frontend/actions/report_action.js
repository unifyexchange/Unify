import * as APIUtil from "../util/report_api_util";
import { toggleSuccessModalOn } from "./success_modal_actions";
import { receiveErrors } from "./item_actions";
export const CREATE_REPORT = "CREATE_REPORT";
export const FETCH_REPORT_ITEM = "FETCH_REPORT_ITEM";
export const RECEIVE_REPORT_ITEM = "RECEIVE_REPORT_ITEM";
export const RECEIVE_REPORT_LIST = "RECEIVE_REPORT_LIST";
export const UPDATE_REPORT_STATUS = "UPDATE_REPORT_STATUS";
export const IS_LOADING_REPORT = "IS_LOADING_REPORT";
export const RECEIVE_METRICS = "RECEIVE_METRICS";
export const RECEIVE_MOST_SEARCHED = "RECEIVE_MOST_SEARCHED";
import { successAlert } from "../util/alerts";


export const receiveReportItem = (item) => {
  return {
    type: RECEIVE_REPORT_ITEM,
    item: item,
  };
};

export const receiveReportList = (item) => {
  return {
    type: RECEIVE_REPORT_LIST,
    item: item,
  };
};

export const isLoading = () => {
  return {
    type: IS_LOADING_REPORT,
  };
};

export const updateRepStatus = (report) => {
  return {
    type: UPDATE_REPORT_STATUS,
    report: report,
  };
};

export const receiveMetrics = (metrics) => {
  return {
    type: RECEIVE_METRICS,
    metrics: metrics,
  };
};

export const receiveMostSearched = (searches) => {
  return {
    type: RECEIVE_MOST_SEARCHED,
    searches: searches,
  };
};

// thunk action creators

export const createReport = (item) => {
  return (dispatch) => {
    dispatch(isLoading());
    return APIUtil.createReport(item).then(
      (item) => {
        dispatch(toggleSuccessModalOn());
      },
      (err) => {
        dispatch(isLoading());
        dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const fetchReportItem = (itemId) => {
  return (dispatch) => {
     dispatch(isLoading());
     return APIUtil.fetchReportItem(itemId).then((item) => {
      return dispatch(receiveReportItem(item));
    });
  };
};

export const updateReportStatus = (report) => {
  return (dispatch) => {

    dispatch(isLoading());
    return APIUtil.updateReportStatus(report).then(
      (rep) => {
        const val = {...rep, index: report.index}
        successAlert("Report was updated successfully");
        dispatch(isLoading());
        dispatch(updateRepStatus(val));
        
      },
      (err) => {
        dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};



export const fetchMostSearchCategory = (page) => {
  return (dispatch) => {

    dispatch(isLoading());
    return APIUtil.fetchMostSearchCategory(page).then(
      (rep) => {
        dispatch(receiveMostSearched(rep));
      },
      (err) => {
        dispatch(isLoading());
        dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};


export const searchByTicketId = (ticketId) => {
  return (dispatch) => {

    dispatch(isLoading());
    return APIUtil.searchByTicketId(ticketId).then(
      (rep) => {
        dispatch(receiveReportList(rep));
      },
      (err) => {
        dispatch(isLoading());
        dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const fetchMetrics = () => {
  return (dispatch) => {

    dispatch(isLoading());
    return APIUtil.fetchMetrics().then(
      (rep) => {
       return dispatch(receiveMetrics(rep));
      },
      (err) => {
        dispatch(isLoading());
        // dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};




export const fetchReportList = (page) => {
  return (dispatch) => {
    dispatch(isLoading());
    return APIUtil.fetchReportList(page).then((report) => {
      return dispatch(receiveReportList(report));
    });
  };
};
