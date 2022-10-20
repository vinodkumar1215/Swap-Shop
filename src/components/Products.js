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

const Products = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState([]);
  const [prod, setProd] = useState({});
  const [status, setStatus] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteClose = () => {
    setDeleteDialogOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4032/api/product`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // const deleteProduct =(id) => {
  //   // e.preventDefault();
  //   axios.delete(`http://localhost:4032/api/product/delete`)
  //   .then(res => console.log('Deleted!!!!', res)).catch(err => console.log(err))
  // }

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:4032/api/product/delete/${id}`)
      .then((response) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setStatus(response.status);
        alert("product deleted successfully");
      });
  };

  // function deleteProduct(id) {
  //   fetch(`http://localhost:4032/api/product/delete/${id}`, {
  //     method:'DELETE'
  //   }).then((result) => {
  //     result.json().then((resp)=> {
  //       console.warn(resp)
  //     })
  //   })
  // }

  const [product, setProduct] = useState({
    id: "",
    productname: "",
    productdescription: "",
    productsize: "",
    productstock: "",
    productimage: "",
  });

  const updatePrduct = (e) => {
    // console.log(e.target.name)
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const updateProduct = (id) => {
    console.log(id);
    // const prd = data.find((item) => item.id === id);
    // console.log(prd);
    axios
      .put(`http://localhost:4032/api/product/update/${id}`, product)
      .then((response) => {
        // console.log(response);
        console.log(data);
        const updatedData = data.filter((item) => item.id !== id);
        updatedData.push(product);
        setData(updatedData);
        setStatus(response.status);
        setOpen(false);
      })
      .catch((e) => {
        console.log("error", e);
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

  const [open, setOpen] = React.useState(false);
  // const [prd,setPrd] = React.useState({});

  const editProduct = (id) => {
    console.log(id);
    setOpen(true);
    const prd = data.find((item) => item.id === id);
    console.log(prd);
    setProduct(prd);
    // axios.patch(`http://localhost:4032/api/product/update/${id}`,product)
    // .then(response => {
    //   setStatus(response.status);
    // })
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editProduct = (id) => {
    console.log(id);
    setOpen(true);
    const prd = data.find((item) => item.id === id);
    console.log(prd);
    setProduct(prd);
    // axios.patch(`http://localhost:4032/api/product/update/${id}`,product)
    // .then(response => {
    //   setStatus(response.status);
    // })
  };

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <h1>Product List</h1>
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <Button style={{ marginLeft: "1350px" }} variant="contained">
          Add Product
        </Button>
      </Link>
      <TableContainer sx={{ marginTop: 3 }} component={Paper}>
        <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>
                <b>Product Id</b>
              </TableCell> */}
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell align="centre">
                <b>Price</b>
              </TableCell>
              <TableCell align="centre">
                <b>Description&nbsp;</b>
              </TableCell>
              <TableCell align="centre">
                <b>Size&nbsp;</b>
              </TableCell>
              <TableCell align="centre">
                <b>Stock&nbsp;</b>
              </TableCell>
              <TableCell align="centre">
                <b>Image&nbsp;</b>
              </TableCell>
              <TableCell align="centre">
                <b>Actions&nbsp;</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell align="center">{item.id}</TableCell> */}
                <TableCell component="th" scope="row">
                  {item.productname}
                </TableCell>
                <TableCell align="centre">{item.productprice}</TableCell>
                <TableCell align="centre">{item.productdescription}</TableCell>
                <TableCell align="centre">{item.productsize}</TableCell>
                <TableCell align="centre">{item.productstock}</TableCell>
                <TableCell align="centre">
                  <img src={item.productimage} />{" "}
                </TableCell>
                <TableCell align="centre">
                  <Button>
                    {" "}
                    <BorderColorIcon
                      style={{ marginRight: "25px" }}
                      onClick={() => editProduct(item.id)}
                    />
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <form>
                        {/* <TextField
                        onChange={updatePrduct}
                          name="id"
                          type={"text"}
                          placeholder="product id"
                          variant="outlined"
                          style={{ width: "30%" }}
                        /> */}
                        <br />
                        <br />
                        <TextField
                          onChange={updatePrduct}
                          name="productname"
                          type={"text"}
                          placeholder="product name"
                          label="product name"
                          variant="outlined"
                          style={{ width: "90%" }}
                          value={product.productname}
                        />
                        <br />
                        <br />
                        <TextField
                          onChange={updatePrduct}
                          name="productprice"
                          type={"text"}
                          placeholder="product price"
                          label="product price"
                          variant="outlined"
                          style={{ width: "90%" }}
                          value={product.productprice}
                        />{" "}
                        <br />
                        <br />
                        <TextField
                          onChange={updatePrduct}
                          name="productdescription"
                          type={"text"}
                          placeholder="product description"
                          label="product description"
                          variant="outlined"
                          style={{ width: "90%" }}
                          value={product.productdescription}
                        />{" "}
                        <br />
                        <br />
                        <TextField
                          onChange={updatePrduct}
                          name="productsize"
                          type={"text"}
                          placeholder="product size"
                          label="product size"
                          variant="outlined"
                          style={{ width: "90%" }}
                          value={product.productsize}
                        />{" "}
                        <br />
                        <br />
                        <TextField
                          onChange={updatePrduct}
                          name="productstock"
                          type={"text"}
                          placeholder="product stock"
                          label="product stock"
                          variant="outlined"
                          style={{ width: "90%" }}
                          value={product.productstock}
                        />{" "}
                        <br />
                        <br />
                        <TextField
                          onChange={updatePrduct}
                          name="productimage"
                          type={"text"}
                          placeholder="product image"
                          label="product image"
                          variant="outlined"
                          style={{ width: "90%" }}
                          value={product.productimage}
                        />
                        <br />
                        <br />
                        <Button
                          variant="contained"
                          onClick={() => updateProduct(product.id)}
                        >
                          Edit
                        </Button>
                      </form>
                    </Box>
                  </Modal>
                  <DeleteIcon onClick={() => deleteProduct(item.id)} />
                  <Button>
                    <DeleteIcon
                      onClick={() => {
                        setDeleteDialogOpen(true);
                      }}
                    />
                  </Button>
                  <Modal open={deleteDialogOpen} onClose={handleDeleteClose}>
                    <Box sx={style}>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure to want delete?
                      </Typography>
                      <Button onClick={() => deleteProduct(item.id)}>
                        Yes
                      </Button>
                      <Button onClick={handleDeleteClose}>No</Button>
                    </Box>
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
