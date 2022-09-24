import React from "react";
import { Typography, AppBar, Drawer } from "@mui/material";
import { green, blue, purple } from "@mui/material/colors";
import {
  atom,
  selector,
  selectorFamily,
  atomFamily,
  useRecoilState,
} from "recoil";
import logo from "./logo.svg";
import "./App.css";

//this is where type and interfaces and types are typically located
type student = {
  key: string;
  default: string;
};
//here all function and define details of this page are going to be located
const name = atom({
  key: "name",
  default: "emmanuelle hortil",
});

const students = selector({
  key: "students",
  get: async ({ get }) => {
    const res = await get(name);
    return res;
  },
});

const res = useRecoilState(name);

//this is the main app code
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <Typography> see the bet of our compagny</Typography>
    </div>
  );
}

export default App;
