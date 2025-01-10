import { useEffect, useState } from "react";
import Table from "../components/Table";

export default function UserPage() {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, 3000);
  }, []);

  function getUsers() {
    return users;
  }

  async function addUser(user) {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    setUsers([...users, data]);
  }

  async function deleteUser(id) {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((user) => user.id !== id));
  }

  async function editUser(id, user) {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    setUsers(users.map((u) => (u.id === id ? data : u)));
  }

  return users ? (
    <Table
      columnDefinitions={[
        {
          key: "id",
          title: "ID",
          editable: false,
        },
        {
          key: "fullname",
          title: "Nom complet",
          getValue: (item) => `${item.lastname} ${item.firstname}`,
          style: {},
        },
      ]}
      getItems={getUsers}
      onAdd={addUser}
      onDelete={deleteUser}
      onEdit={editUser}
      rowComponent=""
      formComponent=""
    />
  ) : (
    <progress />
  );
}
