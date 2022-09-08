import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
const notesInitial =[
    {
      "_id": "6319cd4012a286663b735f7f",
      "user": "63104c33695b4388cfd91656",
      "title": "My title",
      "description": "please wake up early in the morninig",
      "tag": "personal",
      "date": "2022-09-08T11:08:48.546Z",
      "__v": 0
    },
    {
      "_id": "6319cd4012a286663b735f7f",
      "user": "63104c33695b4388cfd91656",
      "title": "My title",
      "description": "please wake up early in the morninig",
      "tag": "personal",
      "date": "2022-09-08T11:08:48.546Z",
      "__v": 0
    },
    {
      "_id": "6319cd4012a286663b735f7f",
      "user": "63104c33695b4388cfd91656",
      "title": "My title",
      "description": "please wake up early in the morninig",
      "tag": "personal",
      "date": "2022-09-08T11:08:48.546Z",
      "__v": 0
    },
    {
      "_id": "6319cd4012a286663b735f7f",
      "user": "63104c33695b4388cfd91656",
      "title": "My title",
      "description": "please wake up early in the morninig",
      "tag": "personal",
      "date": "2022-09-08T11:08:48.546Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(notesInitial)

return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}


export default NoteState;