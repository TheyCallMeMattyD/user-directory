import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Use search boxes for a direct result, or sort each column by arrows.</p>
        {/* <p>Current Employee Directory size = ${#employeeCount} Employees</p> */}
      </div>
    )
  }

export default Header;
