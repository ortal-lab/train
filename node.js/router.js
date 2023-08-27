const express = require("express");
const router = express.Router();
const sql = require("mssql");
const { Connection } = require("./db_connection");
let connection;
// middleware that is specific to this router
router.use(async (req, res, next) => {
  if (!connection) {
    connection = await Connection();
  }
  next();
});
// define the home page route
router.get("/router", async (req, res) => {
  let request = new sql.Request();
  // query to the database and get the records
  const data = await request.query("select * from dbo.routes");
  console.log(data);
  res.status(200).json(data);
});
router.get("/building", async (req, res) => {
  let request = new sql.Request();
  // query to the database and get the records
  const data = await request.query("select * from dbo.building");
  console.log(data);
  res.status(200).json(data);
});
router.get("/stops", async (req, res) => {
  let request = new sql.Request();
  // query to the database and get the records
  const data = await request.query("select * from dbo.stops");
  console.log(data);
  res.status(200).json(data);
});
router.get("/runsql", async (req, res) => {
  let request = new sql.Request();
  console.log(req);
  let sqlRun = req.query.sql;

  const data = await request.query(`${sqlRun}`);
  console.log(data);
  res.status(200).json(data);
});
router.delete("/delete", async (req, res) => {
  let request = new sql.Request();
  let table = req.body.table;
  console.log(req.body);
  let objId = req.body.objId;
  let key = Object.keys(objId);
  console.log(key);

  const data = await request.query(`DELETE FROM ${table} WHERE ;
  `);
  console.log(data);
  res.status(200).json(data);
});
router.get("/table", async (req, res) => {
  let request = new sql.Request();
  let table = req.query.table;

  const data = await request.query(`select * from dbo.${table} ;`);
  console.log(data);
  res.status(200).json(data);
});
router.post("/record", async (req, res) => {
  console.log(req.body);
  let table = req.body.table;
  let keys = Object.keys(req.body.data);
  let values = Object.values(req.body.data);
  let valuesString = ``;
  values.forEach((value) => {
    if (typeof value == "string" || typeof value == "string") {
      valuesString = `${valuesString} '${value}' ,`;
      console.log(value, valuesString);
    } else {
      valuesString = `${valuesString} ${value} ,`;
      console.log(value, valuesString);
    }
  });
  console.log(keys.toString());
  console.log(valuesString);
  valuesString = valuesString.slice(0, -1);

  let sqlRun = `INSERT INTO [dbo].[${table}]
  (${keys.toString()})
VALUES
  (
${valuesString}
  )
`;
  console.log(req.body);
  let request = new sql.Request();
  // query to the database and get the records
  console.log(sqlRun);
  const data = await request.query(sqlRun);
  console.log(data);
  res.status(201).json(data);
});
router.get("/stations", async (req, res) => {
  let request = new sql.Request();
  // query to the database and get the records
  const data = await request.query("select * from dbo.station");
  console.log(data);
  res.status(200).json(data);
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
