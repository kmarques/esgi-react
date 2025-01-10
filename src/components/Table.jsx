import { Fragment, useState } from "react";
import Button from "./Button";

export default function Table({ getItems, onAdd, onEdit, onDelete }) {
  const data = getItems();
  const [columnHidden, setColumnHidden] = useState([]);
  const [editItem, setEditItem] = useState(undefined);

  function handleHideColumn(key) {
    setColumnHidden([...columnHidden, key]);
  }

  async function handleAddForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    await onAdd(Object.fromEntries(formData.entries()));
    event.target.reset();
  }

  function toggleEdit(item) {
    setEditItem({ ...item });
  }

  async function saveEdit(item) {
    await onEdit(item.id, editItem);
    setEditItem(undefined);
  }

  function cancelEdit() {
    setEditItem(undefined);
  }

  function handleChange(event) {
    const name = event.target.name;
    setEditItem({
      ...editItem,
      [name]: event.target.value,
    });
  }

  if (!data.length) {
    return <p>No data</p>;
  }

  return (
    <>
      {onAdd && (
        <form onSubmit={handleAddForm}>
          <span>Create item</span>{" "}
          {Object.keys(data[0]).map((key) => (
            <Fragment key={key}>
              <label>{key}</label>
              <input name={key} />
            </Fragment>
          ))}
          <input type="submit" value="Create" />
        </form>
      )}
      <table style={{ border: "1px solid white" }}>
        <caption>
          Data
          {columnHidden.length !== 0 && (
            <Button onClick={() => setColumnHidden([])}>Display all</Button>
          )}
        </caption>
        <thead>
          <tr>
            {Object.keys(data[0])
              .filter((key) => !columnHidden.includes(key))
              .map((header) => (
                <th key={header}>
                  {header}{" "}
                  <Button onClick={() => handleHideColumn(header)}>-</Button>
                </th>
              ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Fragment key={item.id}>
              <tr key={item.id}>
                {Object.entries(item)
                  .filter(([key]) => !columnHidden.includes(key))
                  .map(([key, value]) => (
                    <td key={key}>
                      {editItem?.id === item.id ? (
                        <input
                          name={key}
                          value={editItem[key]}
                          onChange={handleChange}
                        />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                <td>
                  {onEdit && editItem?.id !== item.id && (
                    <Button onClick={() => toggleEdit(item)}>Edit</Button>
                  )}
                  {onDelete && (
                    <Button onClick={() => onDelete(item.id)}>Delete</Button>
                  )}
                  {onEdit && editItem?.id === item.id && (
                    <>
                      <Button onClick={() => saveEdit(item)}>Save</Button>
                      <Button onClick={cancelEdit}>Cancel</Button>
                    </>
                  )}
                </td>
              </tr>
              {/*editItem?.id === item.id && (
                <tr colSpan={Object.keys(data[0]).length}>
                  <td>
                    <form onSubmit={() => saveEdit(item)}>
                      <span>Edit item {item.id}</span>{" "}
                      {Object.keys(data[0]).map((key) => (
                        <Fragment key={key}>
                          <label>{key}</label>
                          <input
                            name={key}
                            value={editItem[key] ?? ""}
                            onChange={handleChange}
                          />
                        </Fragment>
                      ))}
                      <Button component="input" type="submit" value="Save" />
                      <Button onClick={() => cancelEdit()}>Cancel</Button>
                    </form>
                  </td>
                </tr>
              )*/}
            </Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={Object.keys(data[0]).length}>{data.length} items</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
