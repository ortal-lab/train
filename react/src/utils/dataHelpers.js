const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateColumns = (obj) => {
  
  let columns = [];
  let column;
  Object.keys(obj).forEach((element) => {
    column = {
      field: element,
      headerName: capitalizeFirstLetter(element),
      disableExport: false,
      filterable: true,
      hideable: false,
      sortable: true,
      editable: true,
      width: 120,
      align: "left",
      headerAlign: "left",
    };

    columns.push(column);
  });
  return columns;
};
