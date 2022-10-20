import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import dress1 from "./assets/dress1.jpg";
import { useState, useEffect } from "react";
// import axios from "axios";
import json from "./db.json";
import Grid from "@mui/material/Grid";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [color, setColor] = useState(undefined);
  const [toggleHeart, setToggleHeart] = useState("false");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    console.log(json);
    setData(json);
    // axios
    //   .get(`db`)
    //   .then((response) => {
    //     console.log(response);
    //     setData(response.data);
    //     console.log("getList", response);
    //   })
    //   .catch((err) => {});
  });

  const handleClick = (item) => {
    console.log("Product added to wish list");
    setWishList([...wishList, item]);
    // update the data state for nth item
    data.forEach((it, i) => {
      if (it === item) {
        data[i].color === null
          ? (data[i].color = "red")
          : (data[i].color = null);
      }
    });

    //data.map
    setData(data);
  };

  // useEffect(() => {
  //   if (toggleHeart) {
  //     setColor("heart active");
  //   } else {
  //     setColor("heart");
  //   }
  // }, [toggleHeart]);

  return (
    <div>
      <Grid container>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item lg={4} sm={3} key={item.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image={item.image}
                    alt="green iguana"
                    // style={{ marginTop: "-16px" }}
                  />
                  <CardContent style={{ display: "flex" }}>
                    <IconButton
                      style={{ marginRight: "10px", marginTop: "15px" }}
                      disableRipple
                      onClick={(e) => handleClick(item)}
                    >
                      <FavoriteIcon style={{ color: item.color }} />
                    </IconButton>
                    <Typography
                      gutterBottom
                      // variant="h6"
                      component="div"
                      style={{ marginTop: "25px" }}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
