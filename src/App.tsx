import React from 'react';
import './App.css';
import {ListManagementContainer} from "./page/listManagement/ListManagementContainer";

function App() {
  return (
    <div className="App">
      <header>
        <h1>List Management</h1>
      </header>
      <ListManagementContainer/>
    </div>
  );
}

export default App;
