export const createReport = (message) => {
  return $.ajax({
    url: `api/user/reports`,
    method: "POST",
    data: { report: message },
  });
};

export const fetchReportItem = (itemId) => {
  return $.ajax({
    url: `/api/user/items/${itemId}`,
    method: "GET",
  });
};

export const updateReportStatus = (report) => {
  return $.ajax({
    url: `api/user/reports/update`,
    method: "PUT",
    data: { report: report },
  });
};

export const searchByTicketId = (ticketId) => {
  return $.ajax({
    url: `api/report/search`,
    method: "GET",
    data: { ticket: ticketId },
  });
};

export const fetchReportList = (page) => {
  return $.ajax({
    url: `/api/user/reports?page=${page}`,
    method: "GET",
  });
};

export const fetchMetrics = () => {
  return $.ajax({
    url: `/api/report/metrics`,
    method: "GET",
  });
};

export const fetchMostSearchCategory = (page) => {
  return $.ajax({
    url: `/api/report/most-search-category?page=${page}`,
    method: "GET",
  });
};
