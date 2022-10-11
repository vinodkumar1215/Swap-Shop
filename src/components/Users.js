import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Box, Typography, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4032/api/signup/getlist`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <h1>Users List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">USER NAME</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">PINCODE</TableCell>
              <TableCell align="right">STATE</TableCell>
              <TableCell align="right">ADDRESS</TableCell>
              <TableCell align="right">COUNTRY</TableCell>
              <TableCell align="right">CITY</TableCell>
              <TableCell align="right">ROLE</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">MOBILE NUMBER</TableCell>
              <TableCell align="right">GENDER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.userName}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.dob}</TableCell>
                <TableCell align="right">{user.state}</TableCell>
                <TableCell align="right">{user.address}</TableCell>
                <TableCell align="right">{user.country}</TableCell>
                <TableCell align="right">{user.city}</TableCell>
                <TableCell align="right">{user.role}</TableCell>
                <TableCell align="right">{user.status}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
                <TableCell align="right">{user.phNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
