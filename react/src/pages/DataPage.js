import React, { useEffect, useState } from "react";
import "../App.css";
import { generateColumns } from "../utils/dataHelpers";
import FullFeaturedCrudGrid from "../components/DataTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getAllDataTable, runSql } from "../api/api";
import ComboBox from "../components/ComboBox";
const DataPage = () => {
  const [rows, setRows] = useState([]);
  const [keyId, setKeyId] = useState("id");
  const [columns, setColumns] = useState([]);
  const [table, setTable] = useState("worker");
  const [query, setQuery] = useState("");

  const callMatchTable = async () => {
    let res = await getAllDataTable(table);

    if (res) {
      setRows(res?.recordset);
      let tempColumns = generateColumns(res?.recordset[0]);
      setKeyId(tempColumns[0].field);
      setColumns(tempColumns);
    }
  };
  const handleSubmit = async () => {
    let res = await runSql(query, table);
    if (res) {
      setRows(res?.recordset);
      if (res.recordset[0]) {
        let tempColumns = generateColumns(res?.recordset[0]);
        setKeyId(tempColumns[0].field);
        setColumns(tempColumns);
      } else {
        setRows([]);
        setColumns([]);
      }
    }
    setQuery("");
  };
  useEffect(() => {
    alert(table);
    callMatchTable();
  }, [table]);
  return (
    <div className="center">
      <TextField
        value={query}
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value);
        }}
        fullWidth
        label="enter sql"
        id="fullWidth"
      />
      <Button onClick={handleSubmit} variant="contained">
        Run
      </Button>
      <ComboBox setTable={setTable}></ComboBox>
      <FullFeaturedCrudGrid
        rows={rows}
        setRows={setRows}
        keyId={keyId}
        columns={columns}
        table={table}
      >
        DataPage
      </FullFeaturedCrudGrid>
      ;
    </div>
  );
};

export default DataPage;
