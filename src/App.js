// src/App.js
import React, {useState} from 'react';
import AddData from './Components/AddData'
import SetData from './Components/SetData';
import GetData from './Components/GetData';
import GetSingleData from './Components/GetSingleData';
import AddUsers from './Components/AddUsers';
import HelpModal from './Components/HelpModal';

const App = () => {

  const [toggleInfo, setToggleInfo] = useState(false)

    var timerId;

    const [typer, setTyper] = useState("")
    const [titleno, setTitleNo] = useState(0)
    const [secs, setSecs] = useState(75)
    const info = [{title:`Welcome to FBase Demo: Your gauranteed content and non-related database system management software.`},
    {title:`Get onboard and subscribe to our rich, friendly and open related database system management services.`},
    {title:`Simply fill in the form details (name, age and city) and press the Submit button.`},
    {title:`For verification purposes, hit the Load Users button to retrieve the latest user entry.`},
    {title:`Oh! How easy! Now you can fill in and submit subsequent entries, refresh the page and hit the Load Users button.`},
    {title:`There you go, everything looks fine so far so good. Other database features will be installed soon. Bye.`},
]

  return (
    <div className='appfont'>
      <header className='flex items-center gap-4 p-8 sticky top-0 z-100 bg-slate-900'>
        <button 
        onClick={()=> setToggleInfo(!toggleInfo)}
        className='relative p-2 rounded text-xl -mx-50 w-max bg-slate-100 text-teal-900'>{`${toggleInfo?'Hide':'Show'} Info Portal`}</button>
        <h1 className='text-5xl mx-auto w-max text-teal-200'>Firestore User Form</h1>
      </header>
      
      {/* <AddData />
      <SetData />
      <GetData />
      <GetSingleData /> */}
      <section className='flex -z-100'>
        {toggleInfo && <div><HelpModal timerId={timerId}
        typer={typer} setTyper={setTyper} titleno={titleno} setTitleNo={setTitleNo} 
        secs={secs} setSecs={setSecs} info={info}/></div>}
        
        <AddUsers />
      </section>
      
    </div>
  );
};

export default App;
