import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
// import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function AddEdit() {
  const [product, setProduct] = useState({
    productid: "",
    productname: "",
    productdescription: "",
    productsize: "",
    productstock: "",
    productimage: "",
  });
  const navigate = useNavigate();

  const updatePrduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  async function addProduct() {
    console.log(product);
    let result = await axios.post(
      "http://localhost:4032/api/product/save",
      product
    );
    navigate(`/products`);
    console.log(result);
    alert("product added Successfully");
  }

  // // POST request using fetch inside useEffect React hook
  // const addProduct = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     // body: JSON.stringify({ })
  // };
  // fetch('http://localhost:4032/api/product/save', product)
  //     .then(response => response.json())
  // .then(data => setPostId(data.id));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)

  return (
    <div>
      <h1>Add Product</h1>
      <form>
        {/* <TextField name='productid' onChange={updatePrduct} type={'text'} placeholder='product id' variant='outlined' style={{width: "30%"}}/><br/><br/> */}
        <TextField
          name="productname"
          onChange={updatePrduct}
          type={"text"}
          placeholder="product name"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <TextField
          name="productprice"
          onChange={updatePrduct}
          type={"text"}
          placeholder="product price"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="productdescription"
          onChange={updatePrduct}
          type={"text"}
          placeholder="product description"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="productsize"
          onChange={updatePrduct}
          type={"text"}
          placeholder="product size"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="productstock"
          onChange={updatePrduct}
          type={"text"}
          placeholder="product stock"
          variant="outlined"
          style={{ width: "30%" }}
        />{" "}
        <br />
        <br />
        <TextField
          name="productimage"
          onChange={updatePrduct}
          type={"text"}
          placeholder="product image"
          variant="outlined"
          style={{ width: "30%" }}
        />
        <br />
        <br />
        <Button variant="contained" onClick={addProduct}>
          Add
        </Button>
        {/* <Link to="/products"></Link> */}
      </form>
    </div>
  );
}

export default AddEdit;
