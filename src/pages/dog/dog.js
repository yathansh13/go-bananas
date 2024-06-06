import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { DOG_API_KEY } from "../../api";
import "./dog.css";
import { Link } from "react-router-dom";

const API_URL = "https://api.thedogapi.com/v1/images/search?limit=1";

function Dog() {
  const [dogImage, setDogImage] = useState("");

  const fetchDogImage = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          "x-api-key": DOG_API_KEY,
        },
      });
      const data = await response.json();
      setDogImage(data[0].url);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="dog-container">
      <h1>Hi, I'm a dog!</h1>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          {dogImage && (
            <img src={dogImage} alt="Random Dog" className="dog-image" />
          )}
        </Grid>
        <Grid item>
          <div className="buttons">
            <Button variant="contained" color="success" onClick={fetchDogImage}>
              MORE DOGS :)
            </Button>
            <Link to="/">
              <Button variant="contained" color="error">
                Back to weather :(
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dog;
