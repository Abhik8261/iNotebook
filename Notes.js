import React from "react";
import { useEffect, useRef ,useState} from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import { Noteitem } from "./Noteitem";
import { AddNote } from "./AddNote";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle: currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };




  const [note, setNote] = useState({etitle:"",edescription:"",etag:""})
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
      console.log("updating the note....",note)
      e.preventDefault();
      
  }
  return (
    <>
      <AddNote />

      <button
        ref={ref} 
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle" value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription" value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag" value={note.etag}
                    onChange={onChange}
                  />
                </div>

                
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"  className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>You Notes</h2>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};
