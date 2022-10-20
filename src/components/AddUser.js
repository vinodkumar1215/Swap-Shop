import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
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
    phNo: 0,
    gender: "",
  });

  const navigate = useNavigate();

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function addUser() {
    console.log(user);
    let result = await axios.post("http://localhost:4032/api/signup/add", user);
    navigate(`/adduser`);
    console.log(result);
    alert("user added Successfully");
  }

  return (
    <div>
      <h1>Add User</h1>

      <form>
        <TextField
          name="email"
          onChange={updateUser}
          type={"text"}
          placeholder="email"
          label="email"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <TextField
          name="password"
          onChange={updateUser}
          type={"text"}
          placeholder="password"
          label="password"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="dob"
          onChange={updateUser}
          type={"text"}
          placeholder="dob"
          label="dob"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="pincode"
          onChange={updateUser}
          type={"text"}
          placeholder="pincode"
          label="pincode"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="state"
          onChange={updateUser}
          type={"text"}
          placeholder="state"
          label="state"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="address"
          onChange={updateUser}
          type={"text"}
          placeholder="address"
          label="address"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <TextField
          name="country"
          onChange={updateUser}
          type={"text"}
          placeholder="country"
          label="country"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <TextField
          name="role"
          onChange={updateUser}
          type={"text"}
          placeholder="role"
          label="role"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="status"
          required
          onChange={updateUser}
          type={"text"}
          placeholder="status"
          label="status"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="city"
          onChange={updateUser}
          type={"text"}
          placeholder="city"
          label="city"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="userName"
          onChange={updateUser}
          type={"text"}
          placeholder="userName"
          label="userName"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="phNo"
          onChange={updateUser}
          type={"text"}
          placeholder="phNo"
          label="phNo"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <TextField
          name="gender"
          onChange={updateUser}
          type={"text"}
          placeholder="gender"
          label="gender"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <Button variant="contained" onClick={addUser}>
          Add User
        </Button>
      </form>
    </div>
  );
}
