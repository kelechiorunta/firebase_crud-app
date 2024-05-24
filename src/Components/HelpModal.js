import React from 'react'
import { useEffect, useState } from 'react'
var char_no = -1;
var newstring="";

function HelpModal({timerId, info, typer, setTyper, titleno, setTitleNo, secs, setSecs}) {

    const typewriterEffect = () => {

        if (char_no < info[titleno].title.length -1 ){
            setSecs(75)
            char_no++
            newstring += info[titleno].title[char_no]
            setTyper(newstring)
        }else{
            setSecs(n=>n+2000)
            clearTimeout(timerId)

            if (secs > 75) {
                setTitleNo(n=>(n+1) % info.length)
                char_no=-1
                newstring = ""
            }
            
        }        
    }

    useEffect(() => {
        timerId = setTimeout(typewriterEffect, secs)

        return()=>{
            clearTimeout(timerId)
        }
    }, [typer, newstring, titleno, secs, timerId])
  return (
    <div className="-z-100 text-xl rounded p-8 bg-slate-300 text-slate absolute w-60 left-4 shadow-md border">
        <strong className='-z-100'>{typer}</strong>
    </div>
  )
}

export default HelpModal