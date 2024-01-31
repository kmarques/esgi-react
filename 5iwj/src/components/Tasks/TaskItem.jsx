import React, { useState } from "react";
import Button from "../../lib/components/Button";
import TaskForm from "./TaskForm";

function TaskItem({ item, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.status}</td>
        <td>
          <Button
            onClick={() =>
              confirm(`Are you sure to delete '${item.title}' ?`) &&
              onDelete(item.id)
            }
          >
            Delete
          </Button>
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
        </td>
      </tr>
      {isEditing && (
        <tr>
          <td colSpan={4}>
            <TaskForm
              onSubmit={(newValues) => onEdit(item.id, newValues)}
              defaultValues={item}
            />
          </td>
        </tr>
      )}
    </>
  );
}

export default TaskItem;
