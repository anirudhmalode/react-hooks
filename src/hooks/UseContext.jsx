import React, { useContext } from "react";
import { UserContext, EmployeeContext, ManagerContext } from "../App";

const UseContext = () => {
  const user = useContext(UserContext);
  const employee = useContext(EmployeeContext);
  const manager = useContext(ManagerContext);

  return (
    <div className="hook__container">
      <h3>
        UseContext Hook - Provide at parent and use at any child component.
      </h3>
      <p>
        {user} - {employee} - {manager}
      </p>
    </div>
  );
};

export default UseContext;
