import "./placeholder.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Placeholder = () => {
  return (
    <div className="place-div">
      <div className="placeholder">
        <p>Search for a city to get started!</p>
      </div>
      <div>
        <p className="dog-text">
          Or if you don't want to see global warming take effect, click here to{" "}
        </p>
        <Link to="/dogs">
          <Button
            color="success"
            size="large"
            sx={{ fontFamily: "arial" }}
            variant="contained"
          >
            SEE DOGS!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Placeholder;
