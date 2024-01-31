import React from "react";

function TaskList({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default TaskList;
