import { Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
        <h1 style={{textAlign:"center"}}>Assignment 27</h1>
    </Grid>
      {data.map((item) => (
        <Grid item xs={12}>
          <Card sx={{ bgcolor: "lightgreen" }}>
            <CardContent>
              <h2>User Id : <span style={{ color: "red" }}>{item.id}</span></h2>
              <h3>{item.title}</h3>
              <h5>{item.body}</h5>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
