/**
 * Créer un CRUD complet de liste de tâches en utilisant les states et props
 * BONUS:
 *  - Respecter le principe de MVVC: Avoir un composant List générique qui utilise des composants "Vue" pour afficher les tâches
 *  - Utiliser localStorage pour la partie Model
 */

import { useContext, useEffect, useState } from "react";
import { TaskContext } from "./contexts/TaskContext";

// function TaskListView() {
//     const [tasks, setTasks] = useState([]);
//     const [store, setStore] = useState({
//          user: {},
//          tasks: []
//      })
//     const TaskManager = {
//         selectors: {
//             get: () => Object.values(store.tasks).map(t => ({...t, default: 3})),
//             count: () => store.tasks.filter(t => t.status === 'live').length,
//         },
//         actions: {
//             fetch:
////           add:
//             delete:
//             edit:
//         }
//     }
//
//     return (
//         <div>
//             <ListContainer model={TaskManager} container={TaskList} item={TaskItem} form={TaskForm} />
//         </div>
//     )
// }

function TaskList({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

function TaskItem({ item, edit: editAction, delete: deleteAction }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <tr>
        <td>{item.name}</td>
        <td>{item.completed.toString()}</td>
        <td>
          {editAction && (
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
          )}{" "}
          {deleteAction && (
            <button onClick={() => deleteAction(item)}>Delete</button>
          )}
        </td>
      </tr>
      {isEditing && (
        <tr>
          <td colSpan={3}>
            <TaskForm
              initialValues={item}
              onSubmit={(data) => {
                editAction(data, item);
              }}
            />
          </td>
        </tr>
      )}
    </>
  );
}

function TaskForm({ initialValues = {}, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.completed ??= false;
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" defaultValue={initialValues.name} />
      </label>
      <label>
        Completed
        <input
          name="completed"
          type="checkbox"
          defaultValue={initialValues.name}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function ListContainer({
  model,
  container: Container,
  item: Item,
  form: Form,
}) {
  return (
    <>
      <Container>
        {model.selectors.get().map((i) => (
          <Item
            item={i}
            edit={model.actions.edit}
            delete={model.actions.delete}
          />
        ))}
      </Container>
      {model.actions.add && <Form onSubmit={model.actions.add} />}
    </>
  );
}

export default function TaskListView() {
  const TaskManager = useContext(TaskContext);
  return (
    <div>
      <ListContainer
        model={TaskManager}
        container={TaskList}
        item={TaskItem}
        form={TaskForm}
      />
    </div>
  );
}

// cleanup = [];
// Mount (DOM)
// -> cleanup.push(useEffect())
// SetState
// cleanup.forEach(c => c());
// Update Component (DOM)
// -> cleanup.push(useEffect());
// Unmount (DOM)
// cleanup.forEach(c => c());
