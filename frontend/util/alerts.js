import swal from "sweetalert";

export const confirmAlert = () => {
  return swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this item!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  });
};

export const successAlert = (body) => {
  return swal(body, { icon: "success" });
};

export const failedAlert = (body) => {
  return swal(body, { icon: "error" });
};

export const multipleButtonAlert = (stats) => {
  var getBtnToshow = showBtn(stats);
  return swal("Are you sure you want to update the status of this report?", {
    buttons: getBtnToshow,
  });
};

function showBtn(status) {
  var btn = {};
  switch (status) {
    case "IN_PROGRESS":
      btn = {
        resolved: true,
        cancel: "cancel",
      };
      break;
    case "PENDING":
      btn = {
        progress: {
          text: "In progress",
          value: "progress",
        },
        resolved: true,
        cancel: "cancel",
      };
      break;
    case "RESOLVED":
      btn = {
        progress: {
          text: "In progress",
          value: "progress",
        },
        cancel: "cancel",
      };
      break;
  }
  return btn;
};
