import axios from "axios";
//import { config } from "dotenv";
export const getAllRoutes = async () => {
  try {
    // console.log(config);
    let res = await axios.get("http://localhost:5000/router");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllBuildings = async () => {
  try {
    // console.log(config);
    let res = await axios.get("http://localhost:5000/buildings");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllStops = async () => {
  try {
    // console.log(config);
    let res = await axios.get("http://localhost:5000/stops");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteRecord = async (table, objId) => {
  try {
    console.log(objId, table);
    let res = await axios.delete("http://localhost:5000/delete");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllDataTable = async (table) => {
  try {
    let res = await axios.get(`http://localhost:5000/table`, {
      params: { table },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const addRecord = async (newObj, table) => {
  let body = {
    data: newObj,
    table,
  };
  try {
    console.log(newObj);
    let res = await axios.post(`http://localhost:5000/record`, body);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const runSql = async (sql) => {
  try {
    let res = await axios.get(`http://localhost:5000/runsql`, {
      params: { sql },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    alert("hey");
    console.log(error);
  }
};
export const getAllStations = async () => {
  try {
    let res = await axios.get("http://localhost:5000/stations");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
