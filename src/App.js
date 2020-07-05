import React, { useState, useEffect } from "react";
import Main from "./Main";
import "./style/App.css";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
} from "@material-ui/core";
import Icon from "./style/apex-legends-icon.png";
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  let history = useHistory();
  return (
    <div className="App">
      <center>
        <img src={Icon} />
      </center>
      <br />
      <div id="App-body">
        <ul>
          <li>
            <label
              style={{
                fontSize: "20px",
                color: "white",
                fontFamily: "cursive",
                padding: "5px",
              }}
            >
              Platform:{" "}
            </label>
            <Select
              variant="outlined"
              value={selectValue}
              style={{
                width: "60%",
                height: "40px",

                backgroundColor: "silver",
                color: "black",
              }}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <MenuItem value="2">PS5</MenuItem>
              <MenuItem value="5">PC</MenuItem>
              <MenuItem value="1">Xbox</MenuItem>
            </Select>
          </li>
          <li>
            <label
              style={{
                fontSize: "20px",
                color: "white",
                fontFamily: "cursive",
              }}
            >
              Username:{" "}
            </label>
            <input
              type="text"
              color="default"
              style={{
                color: "black",
                borderRadius: "5px",
                border: "1px solid ",
                backgroundColor: "silver",
                width: "60%",
                height: "35px",
              }}
              variant="outlined"
              value={inputValue}
              margin="dense"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </li>
        </ul>
        <center>
          <Button
            color="default"
            variant="contained"
            style={{ color: "#161616" }}
            onClick={(e) =>
              history.push(`/player/${selectValue}/${inputValue} `)
            }
          >
            Search
          </Button>
        </center>
      </div>
    </div>
  );
}
