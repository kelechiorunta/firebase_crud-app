// src/AddUsers.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { doc, collection, addDoc, setDoc, getDocs, getDoc } from 'firebase/firestore';
var userArray = [];

const AddUsers = () => {
  const [users, setUsers] = useState({ name: '', age: '', city: '' });
  const [data, setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({...users, [name]: value})
    // const updatedUsers = [...users];
    // updatedUsers[index][name] = value;
    // setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    // setUsers([...users, { name: '', age: '', city: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); 

    try {
      const queryUser = await getDoc(doc(db, 'users-collection', 'gCyQ0bDFtBCbKJ05wqYd'))//(
       if (queryUser.data().userArray) {
            console.log(queryUser.data().userArray)
            userArray = [...queryUser.data().userArray, users]
       }else{
            userArray = [...userArray, users]
       }
      await setDoc(doc(db, 'users-collection', 'gCyQ0bDFtBCbKJ05wqYd'), {userArray});
      console.log('Users added successfully');
      setUsers({ name: '', age: '', city: '' }); // Reset form after successful submission
    } catch (e) {
      console.error('Error adding users: ', e);
    }
  };

    const fetchUsers = async () => {
      const querySnapshot = await getDoc(doc(db, 'users-collection', 'gCyQ0bDFtBCbKJ05wqYd'))//(collection(db, 'users-collection'));
      setData(querySnapshot.data().userArray);
    };

  return (
    <div className='border shadow-lg mx-auto w-max p-8'>
    <form 
    className='border shadow-lg mx-auto w-180 p-8'
    onSubmit={handleSubmit}>
      {/* {users.map((user, index) => ( */}
        <div>
          <input
            className="p-2 rounded bg-slate-700 text-white m-2 border"
            type="text"
            name="name"//{`name${index}`}
            placeholder="Enter Name"
            value={users.name}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="p-2 rounded bg-slate-700 text-white m-2 border"
            type="number"
            name="age"//{`age${index}`}
            placeholder="Enter Age"
            value={users.age}
            onChange={(e) => handleChange( e)}
          />
          <input
            className="p-2 rounded bg-slate-700 text-white m-2 border"
            type="text"
            name="city"//{`city${index}`}
            placeholder="Enter City"
            value={users.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
      {/* ))} */}
      <button className="p-2 rounded bg-slate-700 text-white m-2" type="button" onClick={fetchUsers}>
        Load Users
      </button>
      <button className="p-2 rounded bg-slate-700 text-white m-2" type="submit">Submit</button>
    </form>
    <div className='overflow-scroll'>
       <table className='border border-collapse border-b-slate-800 p-4 w-max overflow-scroll'>
        <thead className='border border-collapse border-b-slate-800 px-4'>
            <tr className='border border-collapse border-b-slate-800'>
            <th className='border border-collapse border-b-slate-800 text-left px-4 w-80'>Name</th>
            <th className='border border-collapse border-b-slate-800 text-left px-4 w-40'>Age</th>
            <th className='border border-collapse border-b-slate-800 text-left px-4 w-60'>City</th>
            </tr>
        </thead>
        <tbody className='border border-collapse border-b-slate-800 p-4 overflow-scroll'>
      {data.map((item, index) => (
        <tr 
        className='border border-collapse border-b-slate-800 px-4'
        key={index}>
            <td className='border border-collapse border-b-slate-800 px-4 w-80'>{item.name}</td>
            <td className='border border-collapse border-b-slate-800 px-4 w-40'>{item.age}</td>
            <td className='border border-collapse border-b-slate-800 px-4 w-60'>{item.city}</td>
        </tr>
      ))}
      </tbody>
      </table> 
    </div>
    </div>
  );
};

export default AddUsers;
