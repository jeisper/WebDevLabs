import React, { useState, useEffect, useRef } from "react";

function NoteForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update Note"
            value={input}
            name="text"
            className="note-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="note-button"> Update </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a note"
            value={input}
            name="text"
            className="note-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="note-button"> Add note</button>
        </>
      )}
    </form>
  );
}

export default NoteForm;
