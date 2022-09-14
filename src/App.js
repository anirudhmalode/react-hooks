import React, { createContext } from "react";
import { Divider } from "@mui/material";
import "./App.css";
import UseCallback from "./hooks/UseCallback";
import UseContext from "./hooks/UseContext";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseState from "./hooks/UseState";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";

export const UserContext = createContext();
export const EmployeeContext = createContext();
export const ManagerContext = createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Anirudh">
        <EmployeeContext.Provider value="Employee">
          <ManagerContext.Provider value="Manager">
            <UseState />
            <Divider />
            <UseEffect />
            <Divider />
            <UseMemo />
            <Divider />
            <UseCallback />
            <Divider />
            <UseContext />
            <Divider />
            <UseReducer />
            <Divider />
            <UseRef />
          </ManagerContext.Provider>
        </EmployeeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
