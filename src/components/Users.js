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
import { Button, Box, Typography, TextField, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(true);

  const [user, setUser] = useState({
    id: 0,
    email: "",
    password: "",
    dob: "2022-10-11T11:55:15.609Z",
    pincode: 0,
    state: "",
    address: "",
    country: "",
    role: "",
    status: "",
    city: "",
    userName: "",
    phNo: "",
    gender: "",
  });

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

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4032/api/signup/delete/${id}`)
      .then((response) => {
        const updatedData = users.filter((user) => user.id !== id);
        setUsers(updatedData);
        setStatus(response.status);
        setDeleteOpen(false);
        alert("user deleted successfully");
      });
  };

  const updateUser1 = (e) => {
    console.log("data", user);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const updateUser = (id) => {
    console.log(id);
    axios
      .put(`http://localhost:4032/api/signup/update/${id}`, user)
      .then((response) => {
        console.log("data", data);
        const updatedData = users.filter((item) => item.id !== id);
        updatedData.push(user);
        setData(updatedData);
        setStatus(response.status);
        setOpen(false);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const handleClose = () => setOpen(false);

  const handleDeleteClose = () => setDeleteOpen(false);

  const handleDelete = (id) => {
    const user = users.find((user) => user.id === id);
    setUser(user);
    // console.log(users);
    // console.log(user);
    // handleOpen();
    setDeleteOpen(true);
  };
  // const handleClose1 = () => setOpen1(false);

  const edituser = (id) => {
    console.log(id);
    console.log(users);
    const user = users.find((user) => user.id === id);
    setUser(user);
    setOpen(true);
  };

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <h1>Users List</h1>
      <Link to="/adduser">
        <Button
          style={{
            marginLeft: "1250px",
            minWidth: "110px",
            marginBottom: "20px",
          }}
          variant="contained"
        >
          Add User
        </Button>
      </Link>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ width: "140" }}>
              <TableCell>ID</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">PINCODE</TableCell>
              <TableCell align="right">STATE</TableCell>
              <TableCell align="right">ADDRESS</TableCell>
              <TableCell align="right">COUNTRY</TableCell>
              <TableCell align="right">ROLE</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">CITY</TableCell>
              <TableCell align="right">USER NAME</TableCell>
              <TableCell align="right">MOBILE NUMBER</TableCell>
              <TableCell align="right">GENDER</TableCell>
              <TableCell align="right" sx={{ textAlign: "center" }}>
                Action
              </TableCell>
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
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.dob}</TableCell>
                <TableCell align="right">{user.pincode}</TableCell>
                <TableCell align="right">{user.state}</TableCell>
                <TableCell align="right">{user.address}</TableCell>
                <TableCell align="right">{user.country}</TableCell>
                <TableCell align="right">{user.role}</TableCell>
                <TableCell align="right">{user.status}</TableCell>
                <TableCell align="right">{user.city}</TableCell>
                <TableCell align="right">{user.userName}</TableCell>
                <TableCell align="right">{user.phNo}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
                <TableCell
                  align="right"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <BorderColorIcon
                    style={{ marginRight: "25px" }}
                    onClick={() => edituser(user.id)}
                  />

                  <DeleteIcon
                    style={{ marginRight: "25px" }}
                    onClick={() => handleDelete(user.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // style={{ overFlow: "scroll" }}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
      >
        <Box sx={style}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={updateUser1}
                  name="email"
                  type={"text"}
                  placeholder="email"
                  label="email"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={updateUser1}
                  name="dob"
                  type={"text"}
                  placeholder="dob"
                  label="dob"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.dob}
                />{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="pincode"
                  type={"text"}
                  placeholder="pincode"
                  label="pincode"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.pincode}
                />{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="state"
                  type={"text"}
                  placeholder="state"
                  label="state"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.state}
                />{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="address"
                  type={"text"}
                  placeholder="address"
                  label="address"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.address}
                />{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="country"
                  type={"text"}
                  placeholder="country"
                  label="country"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="role"
                  type={"text"}
                  placeholder="role"
                  label="role"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.role}
                />{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="status"
                  type={"text"}
                  placeholder="status"
                  label="status"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.status}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="city"
                  type={"text"}
                  placeholder="city"
                  label="city"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.city}
                />{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="userName"
                  type={"text"}
                  placeholder="userName"
                  label="userName"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.userName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="phNo"
                  type={"text"}
                  placeholder="phNo"
                  label="phNo"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.phNo}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateUser1}
                  name="gender"
                  type={"text"}
                  placeholder="gender"
                  label="gender"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={user.gender}
                />
              </Grid>
            </Grid>
            <br />
            <center>
              <Button variant="contained" onClick={() => updateUser(user.id)}>
                save
              </Button>
              <Button
                variant="contained"
                onClick={handleClose}
                style={{ marginLeft: "15px" }}
              >
                cancel
              </Button>
            </center>
          </form>
        </Box>
      </Modal>
      <div>
        <Modal
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              are you sure you want to delete ?
            </Typography>
            <Button
              style={{ float: "right" }}
              onClick={() => deleteUser(user.id)}
            >
              yes
            </Button>
            <Button style={{ float: "right" }} onClick={handleDeleteClose}>
              No
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Users;
