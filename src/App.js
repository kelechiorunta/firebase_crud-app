// src/App.js
import React from 'react';
import AddData from './Components/AddData'
import SetData from './Components/SetData';
import GetData from './Components/GetData';
import GetSingleData from './Components/GetSingleData';
import AddUsers from './Components/AddUsers';

const App = () => {
  return (
    <div className='appfont'>
      <h1>Firestore CRUD Operations</h1>
      <AddData />
      <SetData />
      <GetData />
      <GetSingleData />
      <h1>Firestore User Form</h1>
      <AddUsers />
    </div>
  );
};

export default App;
