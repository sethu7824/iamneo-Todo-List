import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";

const ItemTypes = {
  NOTE: "note",
};

function Note({
  title,
  content,
  onDelete,
  onEdit,
  id,
  index,
  notes,
  setNotes,
}) {
  const [isEditing, setEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({ title, content });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.NOTE,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.NOTE,
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const newNotes = [...notes];
      const draggedNote = newNotes[dragIndex];
      newNotes.splice(dragIndex, 1);
      newNotes.splice(hoverIndex, 0, draggedNote);

      setNotes(newNotes);
      item.index = hoverIndex;
    },
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    onEdit(id, updatedNote);
    setEditing(false);
    event.preventDefault();
  };

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
      className="note"
    >
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={updatedNote.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={updatedNote.content}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="action-button">
            <MdSave size={25} />
          </button>
        </form>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <div>
            <button className="action-button" onClick={handleEdit}>
              <MdEdit size={25} />
            </button>
            <button className="action-button" onClick={() => onDelete(id)}>
              <MdDelete size={25} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
